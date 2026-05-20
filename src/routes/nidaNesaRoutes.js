const express = require('express');
const router = express.Router();
const {
  getNIDAProfile,
  getNESARecord,
  createNIDAProfile,
  createNESARecord,
} = require('../controllers/nidaNesaController');
const { authenticate, authorize } = require('../middleware/auth');

// All routes require login
router.use(authenticate);

// Applicant fetches their NIDA profile
router.get('/nida/:nationalId', authorize('APPLICANT'), getNIDAProfile);

// Applicant fetches their NESA record
// Example: GET /api/nesa/STU001?nationalId=1199880012345678
router.get('/nesa/:studentId', authorize('APPLICANT'), getNESARecord);

// Super Admin adds NIDA and NESA data
router.post('/nida', authorize('SUPER_ADMIN'), createNIDAProfile);
router.post('/nesa', authorize('SUPER_ADMIN'), createNESARecord);

module.exports = router;

/**
 * @swagger
 * /api/nida/{nationalId}:
 *   get:
 *     summary: Fetch personal info by National ID
 *     tags: [NIDA & NESA]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: nationalId
 *         required: true
 *         schema:
 *           type: string
 *         example: 1199880012345678
 *     responses:
 *       200:
 *         description: NIDA profile fetched successfully
 *       404:
 *         description: National ID not found
 */
router.get('/nida/:nationalId', authorize('APPLICANT'), getNIDAProfile);

/**
 * @swagger
 * /api/nesa/{studentId}:
 *   get:
 *     summary: Fetch academic records by Student ID and National ID
 *     tags: [NIDA & NESA]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *         example: STU001
 *       - in: query
 *         name: nationalId
 *         required: true
 *         schema:
 *           type: string
 *         example: 1199880012345678
 *     responses:
 *       200:
 *         description: Academic records fetched successfully
 *       404:
 *         description: Record not found
 */
router.get('/nesa/:studentId', authorize('APPLICANT'), getNESARecord);

/**
 * @swagger
 * /api/nida:
 *   post:
 *     summary: Add a new NIDA profile
 *     tags: [NIDA & NESA]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nationalId:
 *                 type: string
 *               fullName:
 *                 type: string
 *               gender:
 *                 type: string
 *               dob:
 *                 type: string
 *               placeOfBirth:
 *                 type: string
 *               nationality:
 *                 type: string
 *               fatherName:
 *                 type: string
 *               motherName:
 *                 type: string
 *               address:
 *                 type: string
 *               province:
 *                 type: string
 *               district:
 *                 type: string
 *     responses:
 *       201:
 *         description: NIDA profile created successfully
 *       409:
 *         description: National ID already exists
 */
router.post('/nida', authorize('SUPER_ADMIN'), createNIDAProfile);

/**
 * @swagger
 * /api/nesa:
 *   post:
 *     summary: Add a new NESA record
 *     tags: [NIDA & NESA]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               studentId:
 *                 type: string
 *               nationalId:
 *                 type: string
 *               fullName:
 *                 type: string
 *               school:
 *                 type: string
 *               option:
 *                 type: string
 *               yearCompleted:
 *                 type: integer
 *               grades:
 *                 type: object
 *     responses:
 *       201:
 *         description: NESA record created successfully
 *       404:
 *         description: NIDA profile not found
 */
router.post('/nesa', authorize('SUPER_ADMIN'), createNESARecord);