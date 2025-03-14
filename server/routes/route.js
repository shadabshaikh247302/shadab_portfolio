import { connectionDatabase } from "../config/dbs"

export const addData = async (req,res){
    try {
        const database = await connectionDatabase()
        const mysql = "" //query
        const [portfolio] = await database.query(sql)
        return res.send(portfolio)
    } catch (error) {
        console.log(error)
    }
}