const { StatusCodes } = require("http-status-codes")
const ApiError = require("../helpers/ApiError")
const { BOOKING_QUEUE } = require("../Queues")
const { getChannel } = require("../utils/rabbitmq")
const { notificationService } = require("../services")
const logger = require("../helpers/loggers")



const bookingConsumer = async () => {
    const channel = await getChannel()
    await channel.prefetch(10)
    channel.consume(BOOKING_QUEUE, async (data) => {
        try {
            if (data) {
                const info = await notificationService.postNotification(JSON.parse(data.content.toString()))
                logger.info(`[*] Consumed Successfully ${info.accepted}`)
                logger.info(`[*] Consumed Successfully ${data.content.toString()}`)
                channel.ack(data)
                await new Promise((resolve) => setTimeout(() => { resolve("Resolving") }, 1000));
            }
        } catch (error) {
            logger.error("errorrr", error.message)
        }
    })
}

module.exports = bookingConsumer