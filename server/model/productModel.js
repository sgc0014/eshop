const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required: true,
        default: 0
    },
    img:{
        type:String,
        required:true,
        
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true, 
    },
    description:{
        type:String,
        required:true, 
    },
    countInStock:{
        type:Number,
        required:true,
        default:0 
    }
},{
    timestamps: true
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product