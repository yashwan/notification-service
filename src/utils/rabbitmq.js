const amqp = require("amqplib")

let rabbitmqConnection, channel
const connection = async () => {
try{
    rabbitmqConnection = await amqp.connect("amqp://localhost")
    channel = await rabbitmqConnection.createChannel()
    return channel
}catch(error){
    console.log(error)
}
}

const getChannel = async () => {
    try {
        if(!channel){
            await connection()
        }
        return channel
    } catch (error) {
        console.log("error")
        console.log(error.message)
    }
}
module.exports = {
    getChannel
}
