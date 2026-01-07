

 function getProduct(req,res){
    console.log(req.params)
    res.send({"message" : "To get product details",data : req.params})
}
function createProduct(req,res){
    console.log(req.body)
    res.send({"message" : "To create product details",data : req.body})
}

function updateProduct(req,res){
    console.log(req.params)
    res.send({"message" : "To  update product details",data : req.params})
}


 function deleteProduct(req,res){
    console.log(req.params)
    res.send({"message" : "To  delete product details",data : req.params})
}



module.exports ={
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}