const express = require('express')
const { register, login, getAdmin, getSingleAdmin, deleteSingleAdmin } = require('../Controller/AdminController')
const AdminRoute = express.Router()

// Admin
AdminRoute.post('/register',register)
AdminRoute.post('/login',login)
AdminRoute.get('/',getAdmin)
AdminRoute.get('/:ID',getSingleAdmin)
AdminRoute.delete('/:ID',deleteSingleAdmin)

// AdminRoute.post('/register')

module.exports = AdminRoute