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

