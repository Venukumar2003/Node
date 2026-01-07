const express = require("express")
const Router = express.Router()

const orderControllers = require("../controllers/orderController")

Router.get("/",orderControllers.getOrder);
Router.post("/",orderControllers.createOrder);
Router.put("/",orderControllers.updateOrder);
Router.delete("/",orderControllers.deleteOrder);

// Router.get("/order/:id",(req,res)=>{
//     console.log(req.params)
//     res.json({"message" : "get order details",
//         data : req.params})
// })


// Router.get("/order",(req,res)=>{
//     console.log(req.params)
//     res.json({"message" : "To get order details",data :req.params})
// })

// Router.post("/order",(req,res)=>{
//     console.log(req.body)
//     res.json({"message" : "To create order details",data : req.body})
// })
// Router.put("/order",(req,res)=>{
//     console.log(req.params)
//     res.json({"message" : "To update order details",data : req.params})
// })
// Router.delete("/order",(req,res)=>{
//     console.log(req.params)
//     res.json({"message" : "To delete order details",data : req.params})
// })



module.exports = Router ;