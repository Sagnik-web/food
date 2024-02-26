const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')

dotenv.config()

const db_url = process.env.DB
mongoose.connect(db_url,{
    // useNewUrl:true
}).then(()=>{
    console.log('Databse Connected Successfully.');
}).catch(err=>{
    console.log(`Error ${err}`);
})





const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Server is Running on Port ${port}....`);
})


