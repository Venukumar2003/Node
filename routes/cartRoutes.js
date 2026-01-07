const express = require("express")

const Router = express.Router()

const cartController = require("../controllers/cartController")




Router.get("/cart",cartController.getCart)
Router.post("/cart",cartController.createCart)
Router.put("/cart",cartController.updateCart)
Router.put("/cart",cartController.deleteCart)




// Router.get("/cart",(req,res)=>{
//     console.log(req.params)
//     res.json({"message" : "To get cart details"})
// })

// Router.post("/cart",(req,res)=>{
//     console.log(req.query)
//     res.json({"message" : "To create a cart",data : req.query})
// })

// Router.put("/cart",(req,res)=>{
//     console.log(req.params)
//     res.json({"message" : "To update the cart"})
// })

// Router.delete("/cart",(req,res)=>{
//     console.log(req.params)
//     res.json({"message" :"TO delete the cart"})
// })



module.exports = Router;