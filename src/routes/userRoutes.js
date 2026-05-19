const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  toggleUserStatus,
  deleteUser,
} = require('../controllers/userController');
const { authenticate, authorize } = require('../middleware/auth');

// All routes require Super Admin
router.use(authenticate, authorize('SUPER_ADMIN'));

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.patch('/:id/toggleUser', toggleUserStatus);
router.delete('/:id', deleteUser);

module.exports = router;