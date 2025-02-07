const { StatusCodes } = require("http-status-codes")

const errorHandler = (err, req, res, next) => {
    var statusCode;
    const {message} = err
    const error = new Error(message)
    statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    console.log(err)
    res.status(statusCode).send({
        message: message,
        error: true,
        success: false
    })
}

module.exports = errorHandler