// let express = require("express")

// let mongoose = require("mongoose")

// let {Schema} = mongoose;


// let app = express()

// let PORT = 3000

// app.use(express.json())


// mongoose.connect("mongodb://localhost:27017/school").then(()=>{
//     console.log("mongoose connected successfully")
// }).catch((error)=>{
//     console.log("error ------",error)
// })


// const teacherSchema = new Schema({
//     "name" : String,
//     "age" : Number,
//     "city" : String,
//     "salary" :Number,
//     "id" : Number
// })

// const teacher = mongoose.model("teacher",teacherSchema);




// app.post("/user", async (req,res)=>{
//     console.log(req.body)
//     try{
//         const studentsInfo = await teacher.insertOne(req.body)
//         res.send({"message" : "inserted one document in student colection",data : studentsInfo})
//     }catch(error){
//         res.send({"message" : "error in post API" ,error})
//     }
// })


// app.post("/user", async (req,res)=>{
//     console.log(req.body)
//     try{
//         const studentsInfo = await Student.insertMany(req.body)
//         res.send({"message" : "inserted one document in student colection",data : studentsInfo})
//     }catch(error){
//         res.send({"message" : "error in post API" ,error})
//     }
// })



// app.get("/user", async(req, res)=>{
//     console.log(req.body)

//     try{
//         let get_data = await Student.find(req.body)
//         res.send({"message" : "get document in Students collection",data : get_data})
//     }catch(error){
//         res.send({"message" : "error in get API",error})
//     }
// })


// app.get("/user", async(req, res)=>{
//     console.log(req.body)

//     try{
//         let get_data = await Student.findOne(req.body)
//         res.send({"message" : "get document in Students collection",data : get_data})
//     }catch(error){
//         res.send({"message" : "error in get API",error})
//     }
// })



// app.put("/user/:name", async (req,res)=>{
//     console.log(req.params)
//     console.log(req.body)
//     try{
//         let modify_data = await Student.updateOne({name : req.params.name},{$set : req.body})
//         res.send({"message" : "modify the document in students collection",data: modify_data})
//     }catch(error){
//         res.send({"message" : "error in put API--", error})
//     }
// })


// app.put("/user/:name", async (req,res)=>{
//     console.log(req.params)
//     console.log(req.body)
//     try{
//         let modify_data = await Student.updateMany({name : req.params.name},{$set : req.body})
//         res.send({"message" : "modify the document in students collection",data: modify_data})
//     }catch(error){
//         res.send({"message" : "error in put API--", error})
//     }
// })



// app.delete("/user",async (req,res)=>{
//     console.log(req.body)

//     try{

//         let delete_data = await Student.deleteOne(req.body)
//         res.send({"message" : "delete the document in students collection",data : delete_data})
//     }catch(error){
//         res.send({"message" : "error in delete API ",error})
//     }
// })




// app.delete("/user",async (req,res)=>{
//     console.log(req.body)

//     try{

//         let delete_data = await Student.deleteMany(req.body)
//         res.send({"message" : "delete the document in students collection",data : delete_data})
//     }catch(error){
//         res.send({"message" : "error in delete API ",error})
//     }
// })








// app.listen(PORT, ()=>{
//     console.log("Server is running on PORT 3000");
// })





let express = require("express")

let mongoose = require("mongoose")

let {Schema} = mongoose;

let app = express()

let PORT = 3000;


app.use(express.json())


mongoose.connect("mongodb://localhost:27017/company").then(()=>{
    console.log("mongoose connection is successful")
}).catch((error)=>{
    console.log("error-------",error)
})

const studentsSchema = new Schema ({
    "name" : String,
    "age" : Number,
    "salary" : Number,
    "role" : String
})


const User = mongoose.model("User",studentsSchema);



app.post("/user", async (req,res)=>{
    console.log(req.body)
    try{
        const studentsInfo = await User.insertOne(req.body)
        res.send({"message" : "inserted one document in student colection",data : studentsInfo})
    }catch(error){
        res.send({"message" : "error in post API" ,error})
    }
})



app.listen(PORT,()=>{
    console.log("Server is running on PORT 3000")
})