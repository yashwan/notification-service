const {rabbitmqConnection} = require("../utils/rabbitmq")

const consumeFromNotificationQueue = async (message) => {
    const channel = await rabbitmqConnection.createChannel()
    await channel.assertQueue("notification-queue")
    return channel
}
