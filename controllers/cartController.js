// function createCart(req,res){
//     console.log(req.body)
//     res.send({"message" : "to create Cart",data : req.body})
// }

// function getCart(req,res){
//     console.log(req.params)
//     res.send({"message" : "to get Cart",data : req.params})
// }

// function updateCart(req,res){
//     console.log(req.params)
//     res.send({"message" : "to update Cart",data : req.params})
// }

// function deleteCart(req,res){
//     console.log(req.params)
//     res.send({"message" : "to delete Cart",data : req.params})
// }


// module.exports ={
//     createCart,
//     getCart,
//     updateCart,
//     deleteCart
// }


function createCart(req, res) {
    console.log(req.body);
    res.send({ "message": "Create new Cart ", data: req.body })
}

function getCart(res, res) {
    console.log(req.body)
    res.send({ "message": "To get Cart ", data: req.body })
}

function updateCart(req, res) {
    console.log(req.body);
    res.send({ "message": "update cart", data: req.body })
}

function deleteCart(req, res) {
    console.log(req.body);
    res.send({ "message": "delete the cart", data: req.body })
}


module.exports = {
    createCart,
    getCart,
    updateCart,
    deleteCart
}