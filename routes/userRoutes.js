const express = require("express");

const Router = express.Router();

const userController = require("../controllers/userController")


//using controllers//

Router.get("/user",userController.getUser)
Router.post("/user",userController.createUser)
Router.put("/user",userController.updateUser)
Router.delete("/user",userController.deleteUser)



//using Routes //

// Router.get("/user/:id",(req,res)=>{
//     console.log(req.params);
//     res.json({"message":"Get User ", data : req.params})
// })

// Router.get("/user",(req,res)=>{
//     // console.log(req.params)
//     res.json({"message" :"To get User"})
// })

// Router.post("/user",(req,res)=>{
//     console.log(req.query)
//     res.json({"message" : "Created User",data : req.query})
// })

// Router.put("/user",(req,res)=>{
//     console.log(req.params)
//     res.json({"message" : "Update user"})
// })



// Router.delete("/user",(req,res)=>{
//     console.log(req.params)
//     res.json({"message" : "delete user"})
// })


module.exports = Router;




