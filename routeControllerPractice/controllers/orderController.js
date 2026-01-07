
 function getOrder(req,res){
    console.log(req.params)
    res.send({"message" : "To get Order details",data : req.params})
}
function createOrder(req,res){
    console.log(req.body)
    res.send({"message" : "To create Order details",data : req.body})
}

function updateOrder(req,res){
    console.log(req.params)
    res.send({"message" : "To  update Order details",data : req.params})
}


 function deleteOrder(req,res){
    console.log(req.params)
    res.send({"message" : "To  delete Order details",data : req.params})
}



module.exports ={
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
}