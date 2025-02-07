const { EMAIL_QUEUE } = require("../Queues");
const { notificationService } = require("../services");
const { getChannel } = require("../utils/rabbitmq")

const emailConsumer = async () => {
    try {
        const channel = await getChannel();
        channel.consume(EMAIL_QUEUE, async (data) => {
            var message;
            message = { userGmail, subject, content } = JSON.parse(data.content.toString())
            try{
                const info = await notificationService.postNotification(message)
                console.log(`[*] ${info.accepted} is stored in the DB successfully`)
            }catch(error){
                console.log(error.message)
            }
            console.log(`data consume : ${data.content.toString()}`)
            channel.ack(data)
        })
    } catch (error) {
        console.log("error is here", error.message)
    }
}

module.exports = emailConsumer
