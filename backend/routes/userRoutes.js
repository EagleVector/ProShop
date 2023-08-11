import express from "express";
const router = express.Router();
import { 
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  updateUserByID,
  deleteUser } from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

  router.route('/')
    .get(protect, admin, getUsers)
    .post(registerUser);

  router.post('/logout', logoutUser);
  router.post('/login', authUser);
  router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

  router.route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserByID)
    .put(protect, admin, updateUserByID);

export default router;