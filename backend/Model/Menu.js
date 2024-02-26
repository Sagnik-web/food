const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String
    },
    items:{
        type:Array
    },
    price:{
        type:Number
    },
    img:{
        type:String
    },
    status:{
        type:String,
        enum:['pending','approve','block'],
        default:'pending'

    },
    resturent:{
        type:ObjectId,
        ref:'kitchens'
    }
},{timestamps:true})


const Menu = mongoose.model('menus',menuSchema)



module.exports = Menu

