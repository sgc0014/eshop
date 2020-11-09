const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        img: { type: String, required: true },
        price: { type: String, required: true },
        _id: {
          type: mongoose.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
     address: {type:String,required:true},
     city: {type:String,required:true},
     postalCode: {type:String,required:true},
     district: {type:String,required:true}
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
       id:{type:String},
       status:{type:String},
       update_time:{type:String},
       email_address:{type:String},
      },
    taxPrice: {
      type: Number,
      required: true,
      default:0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default:0.0
      },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt:{
        type:Date
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
      },
      deliveredAt:{
        type:Date
    },

  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
