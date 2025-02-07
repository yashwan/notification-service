const notificationRouter = require("express").Router()
const {notificationController} = require("../../controllers/index")

notificationRouter.post("/", notificationController.sendNotification)
notificationRouter.get("/", notificationController.getPendingNotifications)
notificationRouter.get("/:id", notificationController.getPendingNotifications)


module.exports = notificationRouter