const Router = require("express").Router();
const userController = require("../controllers/userController");
const {
  signUpController,
  logInController,
  getUserDetail,
  getAllUsers,
  deleteUser,
} = userController;
const tokenMiddleware = require("../middleware/verifyToken");
const { verifyToken, verifyAdmin } = tokenMiddleware;
const User = require("../model/userModel");

//@desc register new user => /api/user/signUp
//@access Public
Router.post("/signUp", signUpController);

//@desc login user => /api/user/login
//@access Public
Router.post("/logIn", logInController);

//@desc get user details => /api/user/getProfile
//@access Private
Router.get("/getProfile", verifyToken, getUserDetail);

//@desc get all users => /api/user/getusers
//@access Admin
Router.get("/getusers", verifyToken, verifyAdmin, getAllUsers);

//@desc delete user => /api/user/deleteuser
//@access Admin
Router.put("/deleteuser", verifyToken, verifyAdmin, deleteUser);

module.exports = Router;
