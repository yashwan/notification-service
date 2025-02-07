const { StatusCodes } = require("http-status-codes")
const ApiError = require("../helpers/ApiError")
const { BOOKING_QUEUE } = require("../Queues")
const { getChannel } = require("../utils/rabbitmq")
const { notificationService } = require("../services")



const bookingConsumer = async () => {
    const channel = await getChannel()
    await channel.prefetch(1)
    channel.consume(BOOKING_QUEUE, async (data) => {
        try {
            if(data){
                const info = await notificationService.postNotification(JSON.parse(data.content.toString()))
                console.log(`[*] Consumed Successfully ${info.accepted}`)
                await new Promise((resolve) => setTimeout(() => {resolve("Resolving")}, 1000));
                console.log(`[*] Consumed Successfully ${data.content.toString()}`)
                channel.ack(data)
            }
        } catch (error) {
            console.log("errorrr", error.message)
        }
    })
}

module.exports = bookingConsumer