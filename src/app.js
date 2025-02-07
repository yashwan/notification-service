const Express = require("express")
const apiRouter = require("./routes")
const errorHandler = require("./helpers/errorHandler")
const { emailConsumer } = require("./consumers")

const app = Express()
app.use(Express.json())
app.use(Express.urlencoded({extended:true}))


app.use("/api", apiRouter)
app.use((req, res, next) => {
    throw new Error("No route found")
})
app.use(errorHandler)

module.exports = app