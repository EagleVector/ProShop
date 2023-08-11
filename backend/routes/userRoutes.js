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
  deleteUser } from '../controllers/userController.js'

  router.route('/')
    .get(getUsers)
    .post(registerUser);

  router.post('/logout', logoutUser);
  router.post('/login', authUser);
  router.route('/profile')
    .get(getUserProfile)
    .put(updateUserProfile);

  router.route('/:id')
    .delete(deleteUser)
    .get(getUserByID)
    .put(updateUserByID);

export default router;