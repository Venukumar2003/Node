// let express = require("express")

// let connection = require("./db")

// let app = express()

// let PORT = 3000;


// app.use(express.json());



// app.post("/users", async (req,res)=>{
//     console.log(req.body)
//     try{
//         let db = await connection();
//         // console.log("db.js file connected succesfully")

//         let students = await db.collection("students").insertOne(req.body)
//         res.json({"message" : "inserted one documents in students collection", data: students})
//     }catch(error){
//         res.json({"message" :"error in POST API",error})
//     }
// })







// app.put("./users/:name", async (req,res)=>{
//     console.log(req.params)
//     console.log(req.body)

//     try{
//         let db = await connection()
        

//         let update_data = await db.collection("students").updateOne({name : req.params.name} , {$set : req.body})
//         res.json({"message" : "updated date int students collection",data : update_data})
//     }catch(error){
//         res.status(500).json({"message" : "error in PUT API",error})
//     }
// })





// app.put("/users/:name", async (req,res)=>{
//     console.log(req.params)
//     console.log(req.body)
//     try{
//         let db = await connection();
//         // console.log("db.js file connected succesfully")

//         let update_data = await db.collection("students").updateOne({name:req.params.name},{$set : req.body})
//         res.json({"message" : "inserted one documents in students collection", data: update_data})
//     }catch(error){
//         res.json({"message" :"error in PUT API",error})
//     }
// })




// app.post("/user", async (req,res)=>{
//     console.log(req.body)

//     try{
//         const db = await connection()
//         const insert_data = await db.collection("students").insertOne(req.body)
//         res.json({"message" : "inserted new data",insert_data})
//     }catch(error){
//         res.json({"message" : "error in POST API" , error})
//     }
// })





// app.listen(PORT,()=>{
//     console.log(`Server is running on ${PORT}`)
// })



// let express = require("express")

// let mongoose  = require("mongoose")

// let {Schema}  = mongoose;



// let app = express();



// app.use(express.json())

// let PORT = 3000;


// mongoose.connect("mongodb://localhost:27017/company").then(()=>{
//     console.log("mongoose connected successfully")
// }).then((error)=>{
//     console.log("mongoose connection error-------",error)
// })


// let employeesSchema = new Schema({
//     "name" : String,
//     "id" : Number,
//     "salary" : Number,
//     "role" : String,
//     "age" : Number
// })


// const employees = mongoose.model("employees",employeesSchema)



// // app.post("/user", async (req,res)=>{
// //     console.log(req.body)

// //     try{
// //         const employeesInfo = await employees.insertMany(req.body)
// //         res.json({"message" : "inserted new documents into employees collection",data : employeesInfo})
// //     }catch(error){
// //         res.json({"message" :"error in post API",error})
// //     }
// // })

// // app.put("/user/:id",async(req,res)=>{
// //     console.log(req.params.id)
// //     console.log(req.body)

// //     try{
// //         let update_data = await employees.updateOne({id : req.params.id},{$set : req.body})
// //         res.json({"message" : "update the document in employees collection",data : update_data})
// //     }catch(error){
// //         res.json({"message" : "error in put API",error})
// //     }
// // })



// app.delete("/user",async(req,res)=>{
//     console.log(req.body)

//     try{
//         let delete_data = await employees.deleteMany(req.body)
//         res.json({"message" : "delete the document in employees collection ",data : delete_data})
//     }catch(error){
//         res.json({"message" : "error in delete API",error})
//     }
// })


// app.listen(PORT,()=>{
//     console.log(`Server is running on ${PORT}`)
// })






let express = require("express");
const { Db } = require("mongodb");

let mongoose = require("mongoose")

let {Schema} =mongoose;

let app = express()

let PORT = 3000;

app.use(express.json());



mongoose.connect("mongodb://localhost:27017/company").then(()=>{
    console.log("mongoose connected successfully")
}).catch((error)=>{
    console.log("mongoose connection errorr--------",error)
})


let sampleSchema = new Schema({
    "name" : String,
    "id" : Number,
    "age" : Number,
    "role" : String,
    "salary" : Number
})


const employees = mongoose.model("employees",sampleSchema)




// app.post("/user",async(req,res)=>{
//     console.log(req.body)

//     try{
//         const insert_data = await employees.insertOne(req.body)
//         res.send({"messaage" : "insert document into employees collection",data : insert_data})
//     }catch(error){
//         res.send({"message" : "error in post API",error})
//     }
// })


// app.put("/user/:name",async(req,res)=>{
//     console.log(req.params)
//     console.log(req.body)
//     try{
//         let update_data =await employees.updateOne({name : req.params.name},{$set:req.body})
//         res.json({"message" : "update data successfully in employees collection",data : update_data})
//     }catch(error){
//         res.json({"message" : "error in put API",error})
//     }
// })



// employees.collection.drop().then(()=>{
//     console.log("employees collection dropped")
// }).catch((error)=>{
//     console.log("employees collection is not dropped",error)
// })

// mongoose.connection.dropDatabase().then(()=>{
//     console.log("deleted database successfully")
// }).catch((error)=>{
//     console.log("database is not dropped",error)

// })



app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
