


function getUser(req,res){
    console.log(req.params)
    res.send({"message" : "To get user details",data : req.params})
}

function createUser(req,res){
    console.log(req.body)
    res.send({"message" : "To create user details",data : req.body})
}

function updateUser(req,res){
    console.log(req.params)
    res.send({"message" : "To get update details",data : req.params})
}


function deleteUser(req,res){
    console.log(req.params)
    res.send({"message" : "To get delete details",data : req.params})
}



module.exports ={
    getUser,
    createUser,
    updateUser,
    deleteUser
}