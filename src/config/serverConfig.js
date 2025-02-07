const { config } = require("dotenv")

config()

const { PORT, GMAIL_APP_PASSWORD, GMAIL_APP_ADDRESS } = process.env

module.exports = {
    PORT,
    GMAIL_APP_PASSWORD,
    GMAIL_APP_ADDRESS
}