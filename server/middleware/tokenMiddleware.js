const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const verifyToken = expressAsyncHandler(async(req,res,next) => {
    let token;
 
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
       
        token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.id).select('-password')
        if(!req.user){
            throw new Error("Unauthorized");
        }
    }

    if(!token){
        throw new Error("Unauthorized");
    }

    next()
}
)
module.exports.verifyToken = verifyToken