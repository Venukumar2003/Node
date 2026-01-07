let {MongoClient} = require("mongodb")

let url = "mongodb://localhost:27017"

let client = new MongoClient(url)



async function connect(){
    await client.connect()
    console.log("mongodb connection is successful")

    let db = await client.db("school")
    console.log("database is created",db.databaseName);
    
    return db;
}

connect()



module.exports = connect;