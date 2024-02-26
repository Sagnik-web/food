const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const kitchenSchema = new mongoose.Schema({
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
    activeorder:[
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
    },
    members:[
        {
            name:String,
            phone:Number
        }
    ],
    status:{
        type:String,
        enum:['pending','approve','block'],
        default:'pending'
    }
},{timestamps:true}
)

const Kitchen = mongoose.model('kitchens',kitchenSchema)



module.exports = Kitchen

