const Router = require("express").Router();
const userController = require("../controllers/userController");
const { signUpController, logInController } = userController;
const tokenMiddleware = require("../middleware/tokenMiddleware")
const {verifyToken} = tokenMiddleware
const User = require("../model/userModel");

Router.post("/signUp", signUpController)
Router.post("/logIn", logInController)
Router.get('/getProfile',verifyToken, async (req,res) => {
const user = await User.find({})
res.json(req.user)
})

module.exports = Router;