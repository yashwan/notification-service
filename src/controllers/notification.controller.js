const { StatusCodes } = require("http-status-codes");
const ApiError = require("../helpers/ApiError");
const { notificationService } = require("../services");
 

class NotificationController {
    async sendNotification(req, res, next){
        try {
            const {userGmail, content, subject} = req.body
            if(!userGmail || !content || !subject){
                throw new ApiError("User Not Found", StatusCodes.BAD_REQUEST)
            }
            const info = await notificationService.postNotification({userGmail, content, subject})
            console.log(info)
            res.status(StatusCodes.OK).send({
                message: "Mail sent",
                error: false,
                success: true,
                data: null
            })
        } catch (error) {
            next(error)
        }
    }

    async getPendingNotifications(req, res, next){
        try {
            let id = null;
            if(req.params.hasOwnProperty("id")){
                id = req.params.id
            }
            const response = await notificationService.getPendingNotifications(id)
            res.status(StatusCodes.OK).send({
                data: response,
                error: false,
                success: true,
                message: "Notifications"
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = NotificationController