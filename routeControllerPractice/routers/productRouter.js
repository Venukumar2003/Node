const express = require("express")


const Router = express.Router()

const productControllers = require("../controllers/productController")


Router.get("/",productControllers.getProduct);
Router.post("/",productControllers.createProduct);
Router.put("/",productControllers.updateProduct);
Router.delete("/",productControllers.deleteProduct);



// Router.get("/product/:id",(req,res)=>{
//     console.log(req.params)
//     res.json({"message" : "get product details",
//         data : req.params})
// })


// Router.get("/product",(req,res)=>{
//     console.log(req.params)
//     res.json({"message" : "To get product details",data :req.params})
// })

// Router.post("/product",(req,res)=>{
//     console.log(req.body)
//     res.json({"message" : "To create product details",data : req.body})
// })
// Router.put("/product",(req,res)=>{
//     console.log(req.params)
//     res.json({"message" : "To update product details",data : req.params})
// })
// Router.delete("/product",(req,res)=>{
//     console.log(req.params)
//     res.json({"message" : "To delete product details",data : req.params})
// })



module.exports = Router;