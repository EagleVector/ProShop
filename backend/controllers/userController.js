import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc        Auth user & get token
// @route       POST /api/users/login
// @access      PUBLIC

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    });
  } else {
    res.status(401);
    throw new Error('Invalid Email or Password');
  }
});


// @desc        Register user
// @route       POST /api/users
// @access      PUBLIC

const registerUser = asyncHandler(async (req, res) => {

  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {

    res.status(400);
    throw new Error('User Already Exists');
  }

  const user = await User.create({
    name,
    email, 
    password
  });

  if (user) {
    generateToken(res, user._id);
    
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});


// @desc        Logout user & Clear Cookie
// @route       POST /api/users/logout
// @access      PRIVATE

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0)
  });

  res.status(200).json({ message: 'Logged Out Successfully' });
});


// @desc        Get User profile
// @route       POST /api/users/profile
// @access      PRIVATE

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    })
  } else {
    res.status(404);
    throw new Error('User Not Found');
  }
});


// @desc        Update User profile
// @route       PUT /api/users/profile
// @access      PRIVATE

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();


    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
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