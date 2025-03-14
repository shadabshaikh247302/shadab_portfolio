import mysql from "mysql2/promise"
export const connectionDatabase = async()=>{
    try {
        const Connection = await mysql.createConnection({
            host:process.env.DATABASE_HOST,
            user:process.env.DATABASE_USER,
            password:process.env.DATABASE_PASSWORD,
            database:process.env.DATABASE_NAME
        }) 
        if(Connection){
            console.log("MYSQL successfully connected")
        }
        // const createTableQuery = `
        //      CREATE TABLE data (
        //     phone BIGINT PRIMARY KEY,
        //     first_name VARCHAR(100) NOT NULL,
        //       last_name VARCHAR(100) NOT NULL,
        //     email VARCHAR(100) NOT NULL UNIQUE
        //     )`;
        // const insertDataIntoTable = `
        // INSERT INTO data(phone,first_name,last_name,email)
        // VALUES
        // (9310874216, "Shadab", "Shaikh","shadab.shaikh247302@gmail.com")
        // `
        const fetchTableData = `
        SELECT * FROM data
        `
        const [query] = await Connection.execute(fetchTableData)
        console.log(query)

        // return Connection
    } catch (error) {
        console.log(error)
    }
}