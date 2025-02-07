const notificationRouter = require("./notification.router")
const v1Router = require("express").Router()

v1Router.use("/notification", notificationRouter)

module.exports = v1Router