const express = require('express')
const { register, login, getOwnData, deleteOwnProfile, getDelevery, getSingleDelevery, updateStatusDelevery, deleteSingleDelevery } = require('../Controller/DeleveryController')
const DeleveryRoute = express.Router()

// DELEVERY
DeleveryRoute.post('/register',register)
DeleveryRoute.post('/login',login)
DeleveryRoute.get('/:ID',getOwnData)
DeleveryRoute.delete('/:ID',deleteOwnProfile)


// Admin
DeleveryRoute.get('/',getDelevery)
DeleveryRoute.get('/one/:ID',getSingleDelevery)
DeleveryRoute.patch('/status/:ID',updateStatusDelevery)
DeleveryRoute.delete('/one/:ID',deleteSingleDelevery)

module.exports = DeleveryRoute

