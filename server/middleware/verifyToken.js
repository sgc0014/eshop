const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const verifyToken = expressAsyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded.id)
    req.user = await User.findById(decoded.id).select("-password");
    console.log(req.user)
    if (!req.user) {
      throw new Error("No such user");
    }
  }

  if (!token) {
    throw new Error("Unauthorized");
  }
  next();
});

const verifyAdmin = expressAsyncHandler(async (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("User is not admin");
  }
});
module.exports.verifyToken = verifyToken;
module.exports.verifyAdmin = verifyAdmin;
