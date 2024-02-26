const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
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
    role:{
        type:String,
        enum:["manager"],
        default:"manager"
    }
})

const Admin = mongoose.model('admins',adminSchema)



module.exports = Admin

