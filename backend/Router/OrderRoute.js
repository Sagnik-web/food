const express = require('express')
const { createOrder, getAllOrder, getByUserOrder, getByResturentOrder, getByDeleveryOrder, getSingleOrder, updateOrder, deleteSingleOrder } = require('../Controller/OrderController')
const orderRoute = express.Router()


// orderRoute
orderRoute.post('/',createOrder)
orderRoute.get('/',getAllOrder)
orderRoute.get('/user/:userID',getByUserOrder)
orderRoute.get('/resturent/:resturentID',getByResturentOrder)
orderRoute.get('/delevery/:deleveryID',getByDeleveryOrder)
orderRoute.get('/:ID',getSingleOrder)
orderRoute.patch('/',updateOrder)
orderRoute.delete('/:ID',deleteSingleOrder)





module.exports = orderRoute