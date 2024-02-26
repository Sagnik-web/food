const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const deleverySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    activeorder:
        {
            type:ObjectId,
            // ref:
        },
    phone:{
        type:String
    },
    location:{
        type:String
    },
    avater:{
        type:String
    }
},{timestamps:true})

const Delevery = mongoose.model('deleverys',deleverySchema)



module.exports = Delevery

