const winston = require("winston")
const es = require("winston-elasticsearch")
const fs = require("fs")
const path = require("path")

const date = new Date()
const year = date.getFullYear()
let day = date.getDay()
let month = date.getMonth()

if (day < 10) day = "0" + day
if (month < 10) month = "0" + month

const time = `${day}-${month}-${year}`



const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({
            format: "YYYY-MM-DD:HH:mm:ss"
        }),
        winston.format.printf(log => `[${log.timestamp}] - ${log.level.toLowerCase()} - Message: ${log.message} `)
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: `loggerFiles/${time}.log` })
    ]
})
module.exports = logger