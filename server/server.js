// import mysql from "mysql2/promise"
import dotenv from "dotenv"
import { connectionDatabase } from "./config/dbs.js"
dotenv.config({ path: "./config/config.env" })

connectionDatabase()
// console.log()