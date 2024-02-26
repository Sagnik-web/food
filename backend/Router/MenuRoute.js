const express = require('express')
const { createMenu, getOwnMenu, getSingleOwnMenu, deleteSingleOwnMenu, getMenu, getSingleMenu, getAllMenu, getOneMenu, updateStatusMenu, deleteOneMenu } = require('../Controller/MenuController')
const MenuRoute = express.Router()

//Resturent
MenuRoute.post('/',createMenu)
MenuRoute.get('/own',getOwnMenu)
MenuRoute.get('/own/:ID',getSingleOwnMenu)
MenuRoute.delete('/own/:ID',deleteSingleOwnMenu)

//User
MenuRoute.get('/',getMenu)
MenuRoute.get('/:ID',getSingleMenu)


//Admin
MenuRoute.get('/all',getAllMenu)
MenuRoute.get('/all/:ID',getOneMenu)
MenuRoute.param('/staus/:ID',updateStatusMenu)
MenuRoute.delete('/:ID',deleteOneMenu)





module.exports = MenuRoute