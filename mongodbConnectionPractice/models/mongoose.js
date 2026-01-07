let mongoose = require("mongoose")

let {Schema} = mongoose;


const blogSchema = new Schema({
    "name" : String,
    "age" : Number,
    "city" : String,
    "role" : String,
    "id" : Number
})


const blog = mongoose.model("students",blogSchema)



module.exports = blog;
