const nodeMailer = require("nodemailer")

const { GMAIL_APP_ADDRESS, GMAIL_APP_PASSWORD } = require("../config/serverConfig")

const transporter = nodeMailer.createTransport({
    service: "Gmail",
    auth: {
        user: GMAIL_APP_ADDRESS,
        pass: GMAIL_APP_PASSWORD
    }
})

module.exports = transporter