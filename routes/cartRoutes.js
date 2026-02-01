// const express = require("express")

// const Router = express.Router()

// const cartController = require("../controllers/cartController")




// Router.get("/cart",cartController.getCart)
// Router.post("/cart",cartController.createCart)
// Router.put("/cart",cartController.updateCart)
// Router.put("/cart",cartController.deleteCart)




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



// module.exports = Router;



// let express = require("express");

// // let app = express();

// let Router = express.Router()

// let cartController = require("../controllers/cartController")

// Router.post("/cart",cartController.createCart)
// Router.get("/cart",cartController.getCart)
// Router.put("/cart",cartController.updateCart)
// Router.delete("cart",cartController.deleteCart)


// module.exports = Router;



let express = require("express");

let Router = express.Router();


Router.get("/cart",(req,res)=>{
    console.log(req.body)
    res.send({"message": "get cart",data : req.body})
})

Router.post("/cart",(req,res)=>{
    console.log(req.body)
    res.send({"message": "create cart",data : req.body})
})
Router.put("/cart",(req,res)=>{
    console.log(req.body)
    res.send({"message": "update cart",data : req.body})
})
Router.delete("/cart",(req,res)=>{
    console.log(req.body)
    res.send({"message": "delete cart",data : req.body})
})


module.exports = Router;