const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const userSchema = new mongoose.Schema({
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
    order:[
        {
            type:ObjectId,
            // ref:
        }
    ],
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

const User = mongoose.model('users',userSchema)



module.exports = User

