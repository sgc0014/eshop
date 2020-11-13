const Router = require("express").Router();
const userController = require("../controllers/userController");
const {
  signUpController,
  logInController,
  getUserDetail,
  getAllUsers,
  deleteUser,
  updateUser
} = userController;
const tokenMiddleware = require("../middleware/verifyToken");
const { verifyToken, verifyAdmin } = tokenMiddleware;
const User = require("../model/userModel");

//@desc register new user => /api/auth/signUp
//@access Public
Router.post("/signUp", signUpController);

//@desc login user => /api/auth/login
//@access Public
Router.post("/logIn", logInController);

//@desc get user details => /api/auth/getProfile
//@access Private
Router.get("/getProfile/:id", verifyToken, getUserDetail);

//@desc get all users => /api/auth/getusers
//@access Admin
Router.get("/getAlluser", verifyToken, verifyAdmin, getAllUsers);

//@desc update user => /api/auth/updateUser/:id
//@access Private
Router.post("/updateuser/:id",verifyToken, updateUser);

//@desc delete user => /api/auth/deleteuser
//@access Admin
Router.put("/deleteuser", verifyToken, verifyAdmin, deleteUser);

module.exports = Router;
