// var express = require("express");

// var app = express();

// var PORT = 3000;


// app.use(express.json());


// app.get("/user/id/:id",(req,res)=>{
//     console.log(req.params)
//     // console.log("sample get request");
//     res.send("sample get request")
// })

// app.get("/user/name/:name",(req,res)=>{
//     console.log(req.params)
//     // console.log("sample get request");
//     res.send("sample get request")
// })

// app.get("/user/email/:email",(req,res)=>{
//     console.log(req.params)
//     // console.log("sample get request");
//     res.send("sample get request")
// })

// app.get("/user/role/:role",(req,res)=>{
//     console.log(req.params)
//     // console.log("sample get request");
//     res.send("sample get request")
// })


// app.get("/user",(req,res)=>{
//     console.log(req.query)
//     res.send("to get User details")
// })

// app.get("/user/name/:name",(req,res)=>{
//     console.log(req.params)
//     console.log(req.query)
//     res.send("To Get User Details")
// })

// app.get("/user/name/:name",(req,res)=>{
//     console.log(req.params)
//     console.log(req.body)
//     res.send("To Get User Details")
// })



// app.get("/tables/:num",(req,res)=>{
//     console.log(req.params.num)

//     var array=[]
//     for(let i=1;i<=10;i++){
//         let result= req.params.num * i
//         array.push(result)
    
//     }
//     res.send(array)
// })


// function login(req,res,next){
//     console.log(req.query)
//     if(req.query.email==="venu@gmail.com" && req.query.name=== "Venukumar"){
//         next()
//     }else{
//         return res.status(404).send({
//             "message" : "Access denied"
//         })
//     }
//     next()

// }



// app.get("/login",login, (req, res) => {
//     // console.log(req.query)
//     res.send("User Login Sucessfully")
// })



// function login(req,res,next){
//     console.log(req.query)
//     if(req.query.name==="Venu" || req.query.name === "Venukumar" && req.query.role === "Webdeveloper"){
//         next()
//     }else{
//         return res.status(404).send({
//             "message" : "Access denied"
//         })
//     }
//     next()
// }



// app.get("/login",login,(req,res)=>{
//     // console.log(req.query)
//     res.send("User Login Successfully")
// })



// app.listen(PORT, () => {
//     console.log("Server is running on PORT 3000");
// })








// let express = require("express")


// let connection = require("./db")

// let app = express()

// let PORT = 3000;

// app.use(express.json());


// const userRoutes = require("./routes/userRoutes")


// app.use("/",userRoutes)





// app.post("/user/:name",(req,res)=>{
//     console.log(req.params.name)
//     res.send({"message" : "create user details",data :req.params.name})
// })


// app.get("/user/:name",(req,res)=>{
//     console.log(req.params.name)
//     res.send({"message" : "get user details",data :req.params.name})
// })







// app.post("/user",(req,res)=>{
//     console.log(req.query)
//     res.send({"message" : "create user details",data : req.query})
// })

// app.get("/user/:id",(req,res)=>{
//     console.log(req.params)
//     res.send({"message" : "get user details",data : req.params})
// })


// app.put("/user",(req,res)=>{
//     console.log(req.params)
//     res.send({"message" : "update the user details"})
// })

// app.get("/tables/:num",(req,res)=>{
//     console.log(req.params.num)

//     let array =[];

//     for (let i=1;i<=10;i++){
//         let result = req.params.num*i;
//         array.push(result)
        
//     }

//     res.send(array)

// });


// app.get("/tables/:num",(req,res)=>{
//     console.log(req.params.num);

//     let array = []

//     for(let i=1;i<=10;i++){
//         let result = req.params.num * i;
//         array.push(result)
//     }
//     res.send(array)
// })





// app.post("/user", async(req,res)=>{
//     console.log(req.body)
// try{
//     let db = await connection()

//     const students_info = await db.collection("students").insertOne(req.body)
//     res.json({"message" : "inserted data into school collection",data : students_info})
// }catch(error){
//     res.json({"message": "error in post API",error})
// }
// })



// app.listen(PORT,()=>{
//     console.log("Server is running on PORT 3000")
// })







