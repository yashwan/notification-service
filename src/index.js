const app = require("./app");
const { PORT } = require("./config/serverConfig");
const { emailConsumer, bookingConsumer } = require("./consumers");
const logger  = require("./helpers/loggers");




app.listen(PORT, async () => {
    logger.info(`server is running at port: ${PORT}`)
    await emailConsumer()
    await bookingConsumer()
})
