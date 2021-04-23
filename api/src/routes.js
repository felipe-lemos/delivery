const { request } = require('express')
const express = require('express')

const routes = express.Router()

const OrderService = require('./services/OrderService')
//const ClientService = require('./services/UserService')
//const ProductService = require('./services/ProductService')

//Orders Endpoints
routes.post('/placeorder', OrderService.createOrder)
//routes.get('/getorders', OrderService.getAllOrders)
//routes.get('/getorder/:orderId', OrderService.getOrderById)
//routes.get('/getorder/client/:clientId', OrderService.getOrderByClient)
////routes.put('/updateorder/:orderId', OrderService.updateOrder)
//
////Users Endpoints
////routes.post('/createuser', ClientService.createUser)
//routes.get('/getusers', ClientService.getAllUsers)
//routes.get('/getuserbyid/:userId', ClientService.getUserById)
//routes.get('/getuserbyname/:userName', ClientService.getUserByName)
//routes.put('/updateuser', ClientService.updateUser)
//routes.delete('/deleteuser/:userId', ClientService.getUserById)
//
////Products Endpoints
//routes.post('/createproduct', ProductService.createProduct)
//routes.get('/getproducts', ProductService.getAllProducts)
//routes.get('/getproduct/:prodId', ProductService.getProductById)
//routes.put('/updateproduct', ProductService.updateProduct)
//routes.delete('/deleteproduct/:prodId', ProductService.deleteProduct)
//
module.exports = routes
//