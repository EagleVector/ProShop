import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc        Auth user & get token
// @route       POST /api/users/login
// @access      PUBLIC

const authUser = asyncHandler(async (req, res) => {
  res.send('auth user');
});


// @desc        Register user
// @route       POST /api/users
// @access      PUBLIC

const registerUser = asyncHandler(async (req, res) => {
  res.send('register user');
});


// @desc        Logout user & Clear Cookie
// @route       POST /api/users/logout
// @access      PRIVATE

const logoutUser = asyncHandler(async (req, res) => {
  res.send('logout user');
});


// @desc        Get User profile
// @route       POST /api/users/profile
// @access      PRIVATE

const getUserProfile = asyncHandler(async (req, res) => {
  res.send('get user profile');
});


// @desc        Update User profile
// @route       PUT /api/users/profile
// @access      PRIVATE

const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('update user profile');
});


// @desc        Get Users
// @route       GET /api/users
// @access      PRIVATE/Admin

const getUsers = asyncHandler(async (req, res) => {
  res.send('get users');
});


// @desc        Get User By ID
// @route       GET /api/users/:id
// @access      PRIVATE/Admin

const getUserByID = asyncHandler(async (req, res) => {
  res.send('get user by ID');
});

// @desc        Update User By ID
// @route       PUT /api/users/:id
// @access      PRIVATE/Admin

const updateUserByID = asyncHandler(async (req, res) => {
  res.send('update user by ID');
});


// @desc        Delete User
// @route       DELETE /api/users/:id
// @access      PRIVATE/Admin

const deleteUser = asyncHandler(async (req, res) => {
  res.send('delete user');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  updateUserByID,
  deleteUser
};