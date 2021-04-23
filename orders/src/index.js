const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'orders-consumer',
    brokers: ['localhost:9093']
})

const consumer = kafka.consumer({ groupId: 'kafka-group-test' });

const run = async () => {
    await consumer.connect()
    await consumer.subscribe({ topic: 'orders-topic', fromBeginning: true })

    await consumer.run({
        eachMessage: async ({ message }) => {
            const orderMsg = JSON.parse(message.value.toString())
            console.log(orderMsg.orderId)
            console.log(orderMsg.clientId)
        }
    })
}

run().catch(error => {
    console.error(error);
})