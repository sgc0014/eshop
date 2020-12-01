const mongoose = require("mongoose")
const reviewSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name:{
        type:String,
        required:true
    },
    reviewComment:{
        type:String
    },
    reviewNo:{
        type:Number,
        required:true
    }
},{
    timestamps: true
})

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
    gender:{
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
    reviews:[reviewSchema],
    ratingAvg:{
        type:Number,
        required:true,
        default:0
    },
    reviewsCount:{
        type:Number,
        required:true,
        default:0
    }
    ,
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