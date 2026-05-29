const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = require("../config/db");
const { logAudit } = require('../utils/auditLogger');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: "Your account has been deactivated. Contact an administrator.",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "7d" },
    );

    await logAudit({
    userId: user.id,
    action: 'LOGIN',
    entityType: 'USER',
    entityId: user.id,
     ipAddress: req.ip,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      data: {
        token,
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred during login.",
    });
  }
};

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if email exists in recruitment db
    const existing = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (existing) {
      return res.status(409).json({
        success: false,
        message: 'An account with this email already exists.',
      });
    }

    // // Look up email in NIDA database
    // const nidaProfile = await nidaPrisma.nidaProfile.findUnique({
    //   where: { email: email.toLowerCase().trim() },
    // });

    const hashedPassword = await bcrypt.hash(password, 12);

   const newUser = await prisma.user.create({
  data: {
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.toLowerCase().trim(),
    password: hashedPassword,
    role: 'APPLICANT',
  },
});

    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );

    await logAudit({
      userId: newUser.id,
      action: 'REGISTER',
      entityType: 'USER',
      entityId: newUser.id,
      ipAddress: req.ip,
    });

    return res.status(201).json({
      success: true,
      message: 'Account created successfully.',
      data: {
  token,
  user: {
    id: newUser.id,
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    email: newUser.email,
    role: newUser.role,
  },
},
    });
  } catch (error) {
    console.error('Register error:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred during registration.',
    });
  }
};

const getMe = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      data: req.user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching profile.",
    });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required.' });
    }

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (!user) {
      return res.status(404).json({ success: false, message: 'No account found with this email.' });
    }

    if (user.role !== 'APPLICANT') {
      return res.status(403).json({ success: false, message: 'Password reset is only available for applicants.' });
    }

    if (!user.isActive) {
      return res.status(403).json({ success: false, message: 'Your account is deactivated. Contact an administrator.' });
    }

    return res.status(200).json({
      success: true,
      message: 'Email verified. You can now reset your password.',
    });

  } catch (error) {
    console.error('Forgot password error:', error);
    return res.status(500).json({ success: false, message: 'An error occurred.' });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      return res.status(400).json({ success: false, message: 'Email and new password are required.' });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({ success: false, message: 'Password must be at least 8 characters.' });
    }

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (!user) {
      return res.status(404).json({ success: false, message: 'No account found with this email.' });
    }

    if (user.role !== 'APPLICANT') {
      return res.status(403).json({ success: false, message: 'Password reset is only available for applicants.' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    await prisma.user.update({
      where: { email: email.toLowerCase().trim() },
      data: { password: hashedPassword },
    });

    await logAudit({
      userId: user.id,
      action: 'RESET_PASSWORD',
      entityType: 'USER',
      entityId: user.id,
      ipAddress: req.ip,
    });

    return res.status(200).json({
      success: true,
      message: 'Password reset successfully. You can now log in.',
    });

  } catch (error) {
    console.error('Reset password error:', error);
    return res.status(500).json({ success: false, message: 'An error occurred.' });
  }
};

module.exports = { login, register, getMe, forgotPassword, resetPassword };
