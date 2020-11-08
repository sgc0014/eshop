const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwtToken");
const { generateToken } = jwt;

const signUpController = asyncHandler(async (req, res) => {
  const { email, name, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error("Email already exists");
  } else {
    const hashpassword = bcrypt.hashSync(password, 10);

    const user = await User.create({ email, name, password: hashpassword });
    if (user) {
      res.status(201).json({
        email: user.email,
        password: user.password,
        id: user._id,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      throw new Error("Invalid user data");
    }
  }
});
const logInController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body.email);
  const user = await User.findOne({ email });
  console.log(req.body);
  if (user) {
    const authorized = await bcrypt.compare(password, user.password);
 
    if (authorized) {
      res.json({
        email: user.email,
        id: user._id,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password.");
    }
  } else {
    res.status(401);
    throw new Error("User doesn't exists.");
  }
});

module.exports.signUpController = signUpController;
module.exports.logInController = logInController;
