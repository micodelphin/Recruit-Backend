const express = require('express');
const router = express.Router();
const { getDashboardStats } = require('../controllers/dashboardController');
const { authenticate, authorize } = require('../middleware/auth');

router.get('/', authenticate, authorize('HR', 'SUPER_ADMIN'), getDashboardStats);

module.exports = router;

/**
 * @swagger
 * /api/dashboard:
 *   get:
 *     summary: Get dashboard statistics
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard statistics
 *       403:
 *         description: Access denied
 */
router.get('/', authenticate, authorize('HR', 'SUPER_ADMIN'), getDashboardStats);