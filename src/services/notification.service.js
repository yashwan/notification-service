const { StatusCodes } = require("http-status-codes")
const ApiError = require("../helpers/ApiError")
const transporter  = require("../utils/nodeMailer")
const {GMAIL_APP_ADDRESS} = require("../config/serverConfig");
const { tickerRepo } = require("../repository");


class NotificationService {
    async postNotification({ userGmail, subject, content }) {
        var status;
        try {
            if(!userGmail || !subject || !content){
                throw new ApiError("userGmail or subject or content missing", StatusCodes.BAD_REQUEST)
            }
            const info = await transporter.sendMail({
                from: GMAIL_APP_ADDRESS,
                to: userGmail,
                subject,
                text: content
            })
            if (!(info.accepted.length > 0)){
                throw new ApiError(info.rejected, StatusCodes.BAD_REQUEST)
            }
            status = "SUCCESS"
            await tickerRepo.createNotification({userGmail, subject, content, status})
            return info
        } catch (error) {
            status = "FAILED"
            await tickerRepo.createNotification({userGmail, subject, content, status})
            throw new ApiError(error.message, StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }

    async getPendingNotifications(id){
        try{
            const getPendingNotifications = await tickerRepo.getPendingNotifications(id);
            return getPendingNotifications
        }catch(error){
            throw new ApiError(error.message, error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
        }
    }
}

module.exports = NotificationService