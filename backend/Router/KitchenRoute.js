const express = require('express')
const { register, login, deleteOwnProfile, updateKitchenProfile, getOwnData, getResturents, getSingleResturents, getAllResturent, getOneResturent, updateResturentStatus, deleteOneResturent } = require('../Controller/KitchenController')
const KitchenRoute = express.Router()

// KITCHEN
KitchenRoute.post('/register',register)
KitchenRoute.post('/login',login)
KitchenRoute.delete('/:ID',deleteOwnProfile)
KitchenRoute.patch('/:ID',updateKitchenProfile)
KitchenRoute.get('/own',getOwnData)
// KitchenRoute.get('/status')




// User
KitchenRoute.get('/',getResturents)
KitchenRoute.get('/:ID',getSingleResturents)




// Admin
KitchenRoute.get('/all',getAllResturent)
KitchenRoute.get('/one/:ID',getOneResturent)
KitchenRoute.patch('/status/:ID',updateResturentStatus)
KitchenRoute.delete('/one/:ID',deleteOneResturent)


module.exports = KitchenRoute