const { EMAIL_QUEUE } = require("../Queues");
const { notificationService } = require("../services");
const { logger } = require("../utils/nodeMailer");
const { getChannel } = require("../utils/rabbitmq")

const emailConsumer = async () => {
    try {
        const channel = await getChannel();
        channel.consume(EMAIL_QUEUE, async (data) => {
            var message;
            message = { userGmail, subject, content } = JSON.parse(data.content.toString())
            try{
                const info = await notificationService.postNotification(message)
                logger.info(`[*] ${info.accepted} is stored in the DB successfully`)
            }catch(error){
                logger.error(error.message)
            }
            logger.info(`data consume : ${data.content.toString()}`)
            channel.ack(data)
        })
    } catch (error) {
        logger.error("error is here", error.message)
    }
}

module.exports = emailConsumer
