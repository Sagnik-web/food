const express = require('express')
const cors = require('cors')
const AdminRoute = require('./Router/AdminRoute')
const UserRoute = require('./Router/UserRoute')
const MenuRoute = require('./Router/MenuRoute')
const KitchenRoute = require('./Router/KitchenRoute')
const DeleveryRoute = require('./Router/DeleveryRoute')
const orderRoute = require('./Router/OrderRoute')
const app = express()


app.use(cors())
app.use(express.json())

app.use('/api/v1/admin',AdminRoute)
app.use('/api/v1/user',UserRoute)
app.use('/api/v1/menu',MenuRoute)
app.use('/api/v1/kitchen',KitchenRoute)
app.use('/api/v1/delevery',DeleveryRoute)
app.use('/api/v1/order',orderRoute)






module.exports = app