const express = require("express");
const router = express.Router();
const { login, register, getMe } = require("../controllers/authController");
const { authenticate } = require("../middleware/auth");

router.post("/login", login);
router.post("/register", register);
router.get("/fetchData", authenticate, getMe);

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