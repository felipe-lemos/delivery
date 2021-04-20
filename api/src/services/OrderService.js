const { response } = require('express')
const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'orders-producer',
    brokers: ['localhost:9093']
})

const producer = kafka.producer()

module.exports = {
    async createOrder(request, response) {

        //inserir aqui o kafka producer.
        await producer.connect()
        await producer.send({
            topic: 'test-topic',
            messages: [
                {
                    key: 'key1',
                    value: `{ "id" : "alo alo", "message" : "teste message" }`
                }
            ],
        }).catch(error => {
            console.log(error);
        })

        await producer.disconnect()
        return response.json({ ok: true })
    },
    async updateOrder(request, response) {
        return response.json({ update: true })
    },

    async deleteOrder(request, response) {
        return response.json({ delete: true })
    },

    async getAllOrders(request, response) {
        return response.json({ all_orders: true })
    },

    async getOrderById(request, response) {
        return response.json({ order_by_id: true })
    },

    async getOrderByClient(request, response) {
        return response.json({ order_by_client: true })
    }

}