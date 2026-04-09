const express = require("express")

const Router = express.Router()

const productController = require("../controllers/productController")



Router.get("/product",productController.getProduct)
Router.post("/product",productController.createProduct)
Router.put("/product",productController.updateProduct)
Router.delete("/product",productController.deleteProduct)




// Router.get("/product",(req,res)=>{
//     console.log(req.params)
//     res.json({"message" : "To get Product "})
// })

// Router.post("/product",(req,res)=>{
//     console.log(req.query)
//     res.json({"message" : "To create product",data : req.query})
// })

// Router.put("/product",(req,res)=>{
//     console.log(req.params)
//     res.json({"message" : "To update product"})
// })

// Router.delete("/product",(req,res)=>{
//     console.log(req.params)
//     res.json({"message" : "To delte product"})
// })



module.exports = Router;