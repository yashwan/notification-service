const dotenv = require("dotenv")
dotenv.config()

const {
USERNAME,
PASSWORD,
DATABASE,
HOST,
DIALECT,
} = process.env

const sqlConfig = {
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    host: HOST,
    dialect: DIALECT

}
module.exports = sqlConfig