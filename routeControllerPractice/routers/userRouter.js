const express = require("express")

const Router = express.Router()

const userControllers = require("../controllers/userController");


Router.get("/",userControllers.getUser);
Router.post("/",userControllers.createUser);
Router.put("/",userControllers.updateUser);
Router.delete("/",userControllers.deleteUser);




// Router.get("/user/:id",(req,res)=>{
//     console.log(req.params)
//     res.json({"message" : "get user details",
//         data : req.params})
// })


// Router.get("/user",(req,res)=>{
//     console.log(req.params)
//     res.json({"message" : "To get user details",data :req.params})
// })

// Router.post("/user",(req,res)=>{
//     console.log(req.body)
//     res.json({"message" : "To create user details",data : req.body})
// })
// Router.put("/user",(req,res)=>{
//     console.log(req.params)
//     res.json({"message" : "To update user details",data : req.params})
// })
// Router.delete("/user",(req,res)=>{
//     console.log(req.params)
//     res.json({"message" : "To delete user details",data : req.params})
// })


module.exports = Router;