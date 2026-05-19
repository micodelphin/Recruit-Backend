const express = require('express');
const router = express.Router();
const { getDashboardStats } = require('../controllers/dashboardController');
const { authenticate, authorize } = require('../middleware/auth');

router.get('/', authenticate, authorize('HR', 'SUPER_ADMIN'), getDashboardStats);

module.exports = router;