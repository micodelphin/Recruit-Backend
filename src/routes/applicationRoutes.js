const express = require('express');
const router = express.Router();
const {
  verifyNIDA,
  verifyNESA,
  submitApplication,
  getMyApplication,
  getAllApplications,
  getApplicationById,
  reviewApplication,
} = require('../controllers/applicationController');
const { authenticate, authorize } = require('../controllers/auth');
const upload = require('../middleware/upload');

// All routes require login
router.use(authenticate);

// Applicant verifies national ID with NIDA
router.post('/verifyNida', authorize('APPLICANT'), verifyNIDA);

// Applicant verifies education records with NESA
router.post('/verifyNesa', authorize('APPLICANT'), verifyNESA);

// Applicant views their own application and status
router.get('/myApplication', authorize('APPLICANT'), getMyApplication);

// Applicant submits application with CV upload
router.post('/', authorize('APPLICANT'), upload.single('cv'), submitApplication);

// HR views latest 10 applications sorted alphabetically
router.get('/', authorize('HR', 'SUPER_ADMIN'), getAllApplications);

// HR views full details of one application
router.get('/:id', authorize('HR', 'SUPER_ADMIN'), getApplicationById);

// HR approves or rejects an application
router.patch('/:id/review', authorize('HR', 'SUPER_ADMIN'), reviewApplication);

module.exports = router;