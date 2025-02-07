const CrudOps = require("./crudOps.repo");
const {Ticker} = require("../models");

class TickerRepository extends CrudOps{
    constructor(model){
        super(model)
    }
    async getPendingNotifications(id){
        if(id){
             return await Ticker.findAll({
                where: {
                    id:id,
                    status: "PENDING",
                }
            })
        }
         return await Ticker.findAll({
            where: {
                status: "PENDING"
            }
        })
    }

    async createNotification({subject, content, userGmail, status}){
        const recepientMail = userGmail
        const createNotification = await this.Create({subject, content, recepientMail, status})
        return createNotification
    }
}

const tickerRepo = new TickerRepository(Ticker)
module.exports = tickerRepo