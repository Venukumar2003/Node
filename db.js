let {MongoClient} = require("mongodb")

let url = "mongodb://localhost:27017"

let client = new MongoClient (url);




async function connection(){

    try{
        
        await client.connect()
        console.log("Mongodb connected successfully")

        let db = await client.db("school")
        console.log("database created---------",db.databaseName);
        return db;
    }catch(error){
        console.log("Mongodb connection error----------",error)
    }

}


// connection()



module.exports = connection;