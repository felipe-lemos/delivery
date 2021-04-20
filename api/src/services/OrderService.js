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
    }

}