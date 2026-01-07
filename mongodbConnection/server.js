// let express = require("express")

// let connect = require("./db")

// let app = express()

// let PORT = 3000


// app.use(express.json())


// app.get("/user", async (req, res)=>{
//      console.log(req.body)

//      try{
//         const db = await connect()
//         const students_info = await db.collection("students").find().toArray()
//         res.send({"message" : "fetch user details",data : students_info})

//      }catch(error){
//         res.send({"message" : "errror",error :error})
//      }

// })


// app.post("/user", async (req,res)=>{
//     console.log(req.body)

//     try{
//         const db = await connect()
//         const insert_data = await db.collection("students").insertOne(req.body)
//         res.send({"message" : "inserted new data",insert_data})
//     }catch(error){
//         res.send({"message" : "error" ,error : error})
//     }
// })



// app.patch("/user", async (req,res)=>{
//     console.log(req.body)

//     try{
//         let db = await connect()
//         let update_info = await db.collection("students").updateOne({"name" : "Murali"},{$set : {"name" : "Venukumar"}})
//         res.send({"message" : "info get updated----",update_info})
//     }catch(error){
//         res.send({"message" : "error" ,error:error} )
//     }
// })

// app.listen(PORT,()=>{
//     console.log("Server is runnig on PORT 3000");

// })


let express = require("express")

const connectDB = require("./db")

let app = express()

let PORT = 3000;


app.use(express.json())

// app.get("/user", async (req, res) => {
//     console.log(req.parmas)
//     try {
//         let db = await connectDB();

//         let employees = await db.collection("employees").find().toArray()
//         res.send({ "message": "collection is created inside companyDB database", data: employees })
//     } catch (error) {
//         res.send({ "message": "error in ger API", error })
//     }
// })

// app.post("/user", async (req,res)=>{
//     console.log(req.body)

//     try{
//         let db = await connectDB()
//         let insert_data = await db.collection("employees").insertMany(req.body)
//         res.send({"message" : "inserted data into employees collection",data: insert_data})

//     }catch(error){
//         res.send({"message" : "error in post API",error})
//     }
// })

// app.put("/user/:name", async (req,res)=>{
//     console.log(req.body)

//     try{
//         const db = await connectDB();
//     let update_data = await db.collection("employees").updateOne({name : req.params.name },{$set :req.body})
//     res.send({"message" : "updated the employees inside data",data :update_data})
//     }catch(error){
//         res.send({"message" : "error in patch API",error})
//     }
// })


// app.delete("/user", async (req,res)=>{

//     console.log(req.body)
//     try{
//         let db = await connectDB()
//     let delete_data = await db.collection("employees").deleteMany(req.body)
//     res.send({"message" : "delete employees data",data: delete_data})
//     }catch(error){
//         res.send({"message": "error in delete API",error})
//     }
// })


// let employees_info = await db.employees.find().toArray()
// console.log("toget employees information---", employees_info)

// await db.employees.drop()


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})