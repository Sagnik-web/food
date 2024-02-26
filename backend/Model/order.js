const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const orderSchema = new mongoose.Schema({

    kitchen:{
        type:ObjectId,
        // ref:
    },
    delevery:{
        type:ObjectId,
        // ref:
    },
    user:{
        type:ObjectId,
        // ref:
    },
    menu:[
        {
            type:ObjectId,
            // ref:
        }
    ],


    price:{
        type:Number,
        required:true
    },
    user_location:{
        type:String,
        required:true
    },
    kitchen_location:{
        type:String,
        required:true
    },



    delever_boy_mob:{
        type:String,
        required:true
    },

    kitchen_mob:{
        type:String,
        required:true
    },

    kitchen_status:{
        type:String,
        enum:["recived","delevered","reject"]
    },
    kitchen_otp:Number,
    kitchen_delever_time:String,


    deleverboy_status:{
        type:String,
        enum:["recived","delevered","reject"]
    },
    deleverboy_otp:Number,
    deleverboy_delever_time:String,



},{timestamps:true})



const Order = mongoose.model('orders',orderSchema)

module.exports = Order