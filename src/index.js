const app = require("./app");
const { PORT } = require("./config/serverConfig");
const { emailConsumer, bookingConsumer } = require("./consumers");




app.listen(PORT, async () => {
    console.log(`server is running at port: ${PORT}`)
    await emailConsumer()
    await bookingConsumer()
})
