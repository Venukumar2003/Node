function createProduct(req,res){
    console.log(req.body)
    res.send({"message" : "to create product",data : req.body})
}

function getProduct(req,res){
    console.log(req.params)
    res.send({"message" : "to get product",data : req.params})
}

function updateProduct(req,res){
    console.log(req.params)
    res.send({"message" : "to update product",data : req.params})
}

function deleteProduct(req,res){
    console.log(req.params)
    res.send({"message" : "to delete product",data : req.params})
}


module.exports ={
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
}