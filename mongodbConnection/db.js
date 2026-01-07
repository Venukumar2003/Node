// const {MongoClient} = require("mongodb")

// const url = "mongodb://localhost:27017"

// let client = new MongoClient (url)


// async function connection(){
//     try{
//         await client.connect()
//         console.log("mongodb connection established");

//         let db = await client.db("school");
//         console.log("db connection -----", db.databaseName);

//         let students = await db.createCollection("students");
//         console.log("students collection created---",students.collectionName)

        // await students.insertOne({
        //     "name" : "Venukumar",
        //     "id" : 4,
        //     "course" : "Fullstack Webdevelopment"
        // })

        // await students.insertMany([{"id" :2,
        //     "name": "Murali",
        //     "course" : "Autocad"
        // },{
        // "id" : 3,
        // "name": "Jagan",
        // "course" : "Medical Coding"
        // }])


        // await students.deleteMany({})
        // await students.deleteMany({});

    // let students_info = await students.find({"name" : "Jagan"}).toArray()
    // console.log("student information ----", students_info);




    // let update_info = await students.updateOne({"name" : "Venukumar"},{$set : {"name" : "Bhargava"} })
    //   console.log("update the info",update_info);


    // let update_students = await students.find().toArray()
    // console.log("update studetns info",update_students);

//     }catch(error){
//         console.log("mongodb connection error",error);

//     }finally{
//         console.log("mongodb finally stops");

//     }
// }

// connection();



// let {MongoClient}  = require("mongodb")

// let url = "mongodb://localhost:27017"

// let client = new MongoClient (url)


// async function connection(){
//     try{
//         await client.connect()
//         console.log("mogodb connection established");

//         let db = await client.db("School")
//         console.log("School database created-------",db.databaseName)

//         let students = await db.createCollection("students")
//         console.log("students document created------",students.collectionName)


//         await db.students.insertOne({
//             "id" : 1,
//             "name" : "Venukumar",
//             "Course" : "Fullstack Webdevelopment"
//         })


//     }catch(error){
//         console.log("mongodb connection error--------",error)

//     }finally{
//         console.log("mongodb connection stop----")
    
//     }
// }

// connection();










// let {MongoClient} = require("mongodb")

// let url = "mongodb://localhost:27017"

// let client = new MongoClient(url)


// async function collection(){
//     try{
//     await client.connect()
//     console.log("mongodb connection establishe");

//     let db = await db("companyDB")
//     console.log("database created----",db.databaseName)

//     let employees = await db.createCollection("employees")
//     console.log("create collection -----",employees.collectionName)


//     await employees.insertOne({
//         "name" : "Anji",
//         "id" : 5,
//         "course" : "Degree"
//     })


//     let employees_info = await employees.find().toArray()
//     console.log("employees ------",employees_info);

//     }catch(error){
//         console.log("mongodb connection error" ,error)
//     }finally{
//         console.log("mongodb connection stop")
//     }

// }

// collection();





// let {MongoClient} = require("mongodb")

// let url = "mongodb://localhost:27017"

// let client = new MongoClient(url)


// async function collection(){
//     try{
//     await client.connect()
//     console.log("mongodb connection successful")

//     let db = await client.db("cities")
//     console.log("database created------",db.databaseName)
//     return db;


//       // let fruits = await db.createCollection("fruits")
//     // console.log("fruits collection --------",fruits.collectionName)


//     // await fruits.insertOne({
//     //     "name" : "Apple",
//     //     "price" : 140

//     // });

//     // await fruits.insertMany([{
//     //     "name": "Oranges",
//     //     "price" : 60},
//     //     {
//     //         "name" : "Banana",
//     //         "Price" : 50
//     //     }])


//     // await fruits.updateOne({"name" : "Oranges"},{ $set : {"name": "Pine Apple"}})

//     // await fruits.insertOne({"name" : "Pine Apple","price" : 90})

//     // await fruits.updateMany({"name" : "Pine Apple"},{$set : {"name": "Sapota"}})

//     // await fruits.deleteOne({"name" : "Banana"})

//     // await fruits.deleteMany({"name" : "Sapota"})

//     // await fruits.drop({})

//     // await db.dropDatabase()




//     // let fruits_info = await fruits.find({}).toArray()
//     // console.log("fruits information ---------", fruits_info)



//     }catch(error){
//         console.log("mongodb connection error",error)}
// }
// // collection();



// module.exports = collection;



let {MongoClient} = require("mongodb")

let url = "mongodb://localhost:27017"

let client = new MongoClient(url)




async function connection(){
  try{
  await client.connect()
  console.log("mongodb connection successful")

  let db = await client.db("companyDB")
  console.log("database created -------",db.databaseName)

  // db= client.db("companyDB")
  return db;
  }catch(error){
    console.log("mongodb connection error",error)
  }
}

// connection();



module.exports = connection;