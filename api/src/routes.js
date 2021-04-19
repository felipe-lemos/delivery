const { request } = require('express')
const express = require('express')

const routes = express.Router()

const OrderService = require('./services/OrderService')

routes.post('/createorder', OrderService.createOrder)

module.exports = routes
