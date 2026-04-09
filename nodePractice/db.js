

let {MongoClient} = require("mongodb")

let url = "mongodb://localhost:27017"

let client = new MongoClient(url)




async function connection(){
    try{
        await client.connect()
        console.log("mongodb connection successful")

        let db = await client.db("school")
        console.log("created database")
        return db;

    }catch(error){
        console.log("error----------",error)
    }
}

connection()


module.exports = connection;



