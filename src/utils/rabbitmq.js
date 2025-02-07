const amqp = require("amqplib")
const { logger } = require("./nodeMailer")

let rabbitmqConnection, channel
const connection = async () => {
try{
    rabbitmqConnection = await amqp.connect("amqp://localhost")
    channel = await rabbitmqConnection.createChannel()
    return channel
}catch(error){
    logger.error(error)
}
}

const getChannel = async () => {
    try {
        if(!channel){
            await connection()
        }
        return channel
    } catch (error) {

        logger.error(error.message)
    }
}
module.exports = {
    getChannel
}
