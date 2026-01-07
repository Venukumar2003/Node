let express = require ("express")

let connect = require("./db")

// let blog = require("./models/mongoose")


let app = express()

let PORT = 3000;




app.use(express.json())





// app.post("/user",async (req,res)=>{
//     console.log(req.body)

//     try{

//         let db = await connect()

//         let studentsInfo = await db.collection("students").insertOne(req.body)
//         res.send({"message" : "inserted one document in students collection",data : studentsInfo})
//     }catch(error){
//         res.send({"message": "error in post API"})
//     }
// })


// app.post("/user", async(req,res)=>{
//     console.log(req.body)

//     try{
//         let db = await connect()

//         let insert_data = await db.collection("students").insertMany(req.body)
//         res.send({"message" : " inserted data in students collection",data : insert_data})
//     }catch(error){
//         res.send({"message" : "error in post API",error})
//     }
// })

// app.get("/user", async(req,res)=>{
//     console.log(req.body)

//     try{
//         let db = await connect()

//         let getData = await db.collection("students").find(req.body).toArray()
//         res.send({"message" : " to get data from students collection",data : getData})
//     }catch(error){
//         res.send({"message" : " error in get API" ,error})
//     }
// })




// app.put("/user/:name", async (req,res)=>{
//     console.log(req.parms)
//     console.log(req.body)

//     try{

//         let db = await connect()

//         let update_data = await db.collection("students").updateOne({name : req.params.name},{$set: req.body})
//         res.send({"message" : "update the data in students collection",data : update_data})
//      }catch(error){
//         res.send({"message": "error in put API",error})
//      }
// })


// app.put("/user/:name", async (req,res)=>{
//     console.log(req.parms)
//     console.log(req.body)

//     try{

//         let db = await connect()

//         let update_data = await db.collection("students").updateMany({name : req.params.name},{$set: req.body})
//         res.send({"message" : "update the data in students collection",data : update_data})
//      }catch(error){
//         res.send({"message": "error in put API",error})
//      }
// })


// app.delete("/user", async (req ,res)=>{
//     console.log(req.body)

//     try{
//         let db = await connect()

//         let delete_data = await db.collection("students").deleteOne(req.body)
//         res.send({"message" : "delete the data in students collection",data : delete_data})

//     }catch(error){
//         res.send({"message" : "error in delete API",error})
//     }
// })



// app.delete("/user", async (req ,res)=>{
//     console.log(req.body)

//     try{
//         let db = await connect()

//         let delete_data = await db.collection("students").deleteMany(req.body)
//         res.send({"message" : "delete the data in students collection",data : delete_data})

//     }catch(error){
//         res.send({"message" : "error in delete API",error})
//     }
// })



app.listen(PORT,()=>{
    console.log("Server is running on PORT 3000")
});
