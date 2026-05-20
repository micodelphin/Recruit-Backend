const prisma = require('../config/db');
const bcrypt = require('bcryptjs');
const { logAudit } = require('../utils/auditLogger');

/**
 * GET /api/users
 * Super Admin gets all users
 */
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: [
        { lastName: 'asc' },
        { firstName: 'asc' },
      ],
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    });

    return res.status(200).json({
      success: true,
      data: users,
      meta: { total: users.length },
    });
  } catch (error) {
    console.error('Get all users error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching users.',
    });
  }
};

/**
 * GET /api/users/:id
 * Super Admin gets a single user by ID
 */
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
        applications: {
          select: {
            id: true,
            status: true,
            createdAt: true,
          },
        },
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found.',
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error('Get user by ID error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching user.',
    });
  }
};

/**
 * POST /api/users
 * Super Admin creates a new user with any role
 */
const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    // Check valid roles
    const validRoles = ['APPLICANT', 'HR', 'SUPER_ADMIN'];
    if (!validRoles.includes(role)) {
      return res.status(400).json({
        success: false,
        message: 'Role must be APPLICANT, HR or SUPER_ADMIN.',
      });
    }
    const existing = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (existing) {
      return res.status(409).json({
        success: false,
        message: 'A user with this email already exists.',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await prisma.user.create({
      data: {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.toLowerCase().trim(),
        password: hashedPassword,
        role,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    });

    await logAudit({
      userId: req.user.id,
      action: 'USER_CREATED',
      entityType: 'USER',
      entityId: newUser.id,
      ipAddress: req.ip,
    });

    return res.status(201).json({
      success: true,
      message: 'User created successfully.',
      data: newUser,
    });
  } catch (error) {
    console.error('Create user error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error creating user.',
    });
  }
};

/**
 * PATCH /api/users/:id
 * Super Admin updates a user's information or role
 */
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, role } = req.body;
    if (id === req.user.id && role && role !== 'SUPER_ADMIN') {
      return res.status(400).json({
        success: false,
        message: 'You cannot change your own role.',
      });
    }
    const existing = await prisma.user.findUnique({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'User not found.',
      });
    }

    const updated = await prisma.user.update({
      where: { id },
      data: {
        firstName: firstName?.trim() || existing.firstName,
        lastName: lastName?.trim() || existing.lastName,
        email: email ? email.toLowerCase().trim() : existing.email,
        role: role || existing.role,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
        isActive: true,
        updatedAt: true,
      },
    });

        await logAudit({
        userId: req.user.id,
        action: 'USER_UPDATED',
        entityType: 'USER',
        entityId: id,
        ipAddress: req.ip,
      });

    return res.status(200).json({
      success: true,
      message: 'User updated successfully.',
      data: updated,
    });
  } catch (error) {
    console.error('Update user error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error updating user.',
    });
  }
};

/**
 * PATCH /api/users/:id/toggle-status
 * Super Admin activates or deactivates a user
 */
const toggleUserStatus = async (req, res) => {
  try {
    const { id } = req.params;
    if (id === req.user.id) {
      return res.status(400).json({
        success: false,
        message: 'You cannot deactivate your own account.',
      });
    }

    const existing = await prisma.user.findUnique({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'User not found.',
      });
    }

    // Flip the current status
    const updated = await prisma.user.update({
      where: { id },
      data: { isActive: !existing.isActive },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        isActive: true,
      },
    });

  
  await logAudit({
  userId: req.user.id,
  action: updated.isActive ? 'USER_ACTIVATED' : 'USER_DEACTIVATED',
  entityType: 'USER',
  entityId: id,
  ipAddress: req.ip,
});

    return res.status(200).json({
      success: true,
      message: `User ${updated.isActive ? 'activated' : 'deactivated'} successfully.`,
      data: updated,
    });
  } catch (error) {
    console.error('Toggle user status error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error updating user status.',
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (id === req.user.id) {
      return res.status(400).json({
        success: false,
        message: 'You cannot delete your own account.',
      });
    }

    const existing = await prisma.user.findUnique({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'User not found.',
      });
    }

    await prisma.user.delete({
      where: { id },
    });

await logAudit({
  userId: req.user.id,
  action: 'USER_DELETED',
  entityType: 'USER',
  entityId: id,
  ipAddress: req.ip,
});

    return res.status(200).json({
      success: true,
      message: 'User deleted successfully.',
    });
  } catch (error) {
    console.error('Delete user error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error deleting user.',
    });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  toggleUserStatus,
  deleteUser,
};