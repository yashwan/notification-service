const { StatusCodes } = require("http-status-codes");
const { logger } = require("../utils/nodeMailer");

const errorHandler = (err, req, res, next) => {
    var statusCode;
    const {message} = err
    const error = new Error(message)
    statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    logger.error(err)
    res.status(statusCode).send({
        message: message,
        error: true,
        success: false
    })
}

module.exports = errorHandler