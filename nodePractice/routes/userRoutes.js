let express = require("express")

let Router = express.Router()



Router.post("/user",(req,res)=>{
    console.log(req.params)
    res.send({"message": " create user details"})
})

Router.get("/user/:id",(req,res)=>{
    console.log(req.params.id)
    res.send({"message": "get user details",data: req.params.id})
})



module.exports = Router;