const express = require("express");
const router = express.Router();
const { login, register, getMe, forgotPassword, resetPassword } = require("../controllers/authController");
const { authenticate,authorize } = require("../middleware/auth");
const { resetUserPassword } = require('../controllers/userController');

router.post("/login", login);
router.post("/register", register);
router.get("/fetchData", authenticate, getMe);
router.post("/forgotPassword", forgotPassword)
router.post("/resetPassword", resetPassword)
module.exports = router;


/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login for all users
 *     tags: [Auth]
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: admin@recruitment.com
 *               password:
 *                 type: string
 *                 example: Admin@1234
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', login);

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new applicant
 *     tags: [Auth]
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - password
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: Alice
 *               lastName:
 *                 type: string
 *                 example: Mukamana
 *               email:
 *                 type: string
 *                 example: alice@test.com
 *               password:
 *                 type: string
 *                 example: Alice@1234
 *     responses:
 *       201:
 *         description: Account created successfully
 *       409:
 *         description: Email already exists
 */
router.post('/register', register);

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Get current logged in user
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Returns current user info
 *       401:
 *         description: Not authenticated
 */
router.get('/fetchData', authenticate, getMe);

/**
 * @swagger
 * /api/auth/forgot-password:
 *   post:
 *     summary: Verify email for password reset
 *     tags: [Auth]
 *     description: Checks if the email exists and belongs to an APPLICANT. Client redirects to reset page on success.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: applicant@example.com
 *     responses:
 *       200:
 *         description: Email verified successfully
 *       400:
 *         description: Email is required
 *       403:
 *         description: Account deactivated or role is not APPLICANT
 *       404:
 *         description: No account found with this email
 *       500:
 *         description: Server error
 */
router.post('/forgot-password', forgotPassword);

/**
 * @swagger
 * /api/auth/reset-password:
 *   post:
 *     summary: Reset applicant password
 *     tags: [Auth]
 *     description: Resets the password for an APPLICANT using the verified email and new password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - newPassword
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: applicant@example.com
 *               newPassword:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 example: NewPass@1234
 *     responses:
 *       200:
 *         description: Password reset successfully
 *       400:
 *         description: Missing fields or password too short
 *       403:
 *         description: Role is not APPLICANT
 *       404:
 *         description: No account found with this email
 *       500:
 *         description: Server error
 */
router.post('/reset-password', resetPassword);




