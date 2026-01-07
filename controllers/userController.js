
function createUser(req,res){
    console.log(req.body)
    res.send({"message" : "To create user",data : req.body})
}

function getUser(req,res){
console.log(req.params)
res.send({"message" : "TO get user"})
}

function updateUser(req,res){
console.log(req.params)
res.send({"message" : "TO update user"})
}

function deleteUser(req,res){
console.log(req.params)
res.send({"message" : "TO delete user"})
}

module.exports ={
    createUser,
    getUser,
    updateUser,
    deleteUser
}

