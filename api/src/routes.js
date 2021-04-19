const { request } = require('express')
const express = require('express')

const routes = express.Router()

const PedidoService = require('./services/PedidoService')

routes.post('/cadastrapedido', PedidoService.criaPedido)

module.exports = routes
