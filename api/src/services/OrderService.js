const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: "order-producer",
    brokers: ['kafka:9092']
})

const producer = kafka.producer()

module.exports = {
    async createOrder(request, response) {

        //inserir aqui o kafka producer.
        await producer.connect()
        await producer.send({
            topic: 'test-topic',
            messages: [
                { value: 'Hello KafkaJS user!' },
            ],
        })

        await producer.disconnect()
        return response.json({ ok: true })
    }

}