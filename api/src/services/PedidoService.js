const { Kafka } = require('kafkajs')

module.exports = {
    async criaPedido(request, response) {

        //inserir aqui o kafka producer.
        return response.json({ ok: true })
    }
}