const express = require('express');
const router = express.Router();
const {
  submitApplication,
  getMyApplication,
  getAllApplications,
  getApplicationById,
  reviewApplication,
} = require('../controllers/applicationController');
const { authenticate, authorize } = require('../middleware/auth');
const upload = require('../middleware/upload');

// All routes require login
router.use(authenticate);

// Applicant views their own application and status
router.get('/my-application', authorize('APPLICANT'), getMyApplication);

// Applicant submits application with CV upload
router.post('/', authorize('APPLICANT'), upload.single('cv'), submitApplication);

// HR views latest 10 applications sorted alphabetically
router.get('/', authorize('HR', 'SUPER_ADMIN'), getAllApplications);

// HR views full details of one application
router.get('/:id', authorize('HR', 'SUPER_ADMIN'), getApplicationById);

// HR approves or rejects an application
router.patch('/:id/review', authorize('HR', 'SUPER_ADMIN'), reviewApplication);

// router.get('/:id/cv', authorize('HR', 'SUPER_ADMIN'), downloadCV);

module.exports = router;

/**
 * @swagger
 * /api/applications/my-application:
 *   get:
 *     summary: Get my application status
 *     tags: [Applications]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Returns applicant's application
 *       404:
 *         description: No application found
 */
router.get('/my-application', authorize('APPLICANT'), getMyApplication);

/**
 * @swagger
 * /api/applications:
 *   post:
 *     summary: Submit a new application with CV
 *     tags: [Applications]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               nationalId:
 *                 type: string
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               dateOfBirth:
 *                 type: string
 *               gender:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *               province:
 *                 type: string
 *               district:
 *                 type: string
 *               schoolName:
 *                 type: string
 *               combination:
 *                 type: string
 *               yearOfCompletion:
 *                 type: integer
 *               mathematicsGrade:
 *                 type: string
 *               englishGrade:
 *                 type: string
 *               physicsGrade:
 *                 type: string
 *               chemistryGrade:
 *                 type: string
 *               biologyGrade:
 *                 type: string
 *               cv:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Application submitted successfully
 *       409:
 *         description: Application already exists
 */
router.post('/', authorize('APPLICANT'), upload.single('cv'), submitApplication);

/**
 * @swagger
 * /api/applications:
 *   get:
 *     summary: Get latest 10 applications sorted alphabetically
 *     tags: [Applications]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of applications
 */
router.get('/', authorize('HR', 'SUPER_ADMIN'), getAllApplications);

/**
 * @swagger
 * /api/applications/{id}:
 *   get:
 *     summary: Get full details of one application
 *     tags: [Applications]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Application details
 *       404:
 *         description: Application not found
 */
router.get('/:id', authorize('HR', 'SUPER_ADMIN'), getApplicationById);

/**
 * @swagger
 * /api/applications/{id}/review:
 *   patch:
 *     summary: Approve or reject an application
 *     tags: [Applications]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: APPROVED
 *               reviewComment:
 *                 type: string
 *                 example: Good profile
 *     responses:
 *       200:
 *         description: Application reviewed successfully
 *       400:
 *         description: Reason required when rejecting
 */
router.patch('/:id/review', authorize('HR', 'SUPER_ADMIN'), reviewApplication);