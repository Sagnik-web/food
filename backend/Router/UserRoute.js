const express = require('express')
const { register, login, updateProfile, getOwnProfile, deleteOwnProfile, getAll, getSingleUser, updateStatus, deleteOneUser } = require('../Controller/UserController')
const UserRoute = express.Router()

// USER
UserRoute.post('/register',register)
UserRoute.post('/login',login)
UserRoute.patch('/:ID',updateProfile)
UserRoute.get('/:ID',getOwnProfile)
UserRoute.delete('/:ID',deleteOwnProfile)


// Admin
UserRoute.get('/',getAll)
UserRoute.get('/one/:ID',getSingleUser)
UserRoute.patch('/status/:ID',updateStatus)
UserRoute.delete('/one/:ID',deleteOneUser)


module.exports = UserRoute