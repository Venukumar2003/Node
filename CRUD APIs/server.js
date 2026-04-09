const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const employeeRouter = require("./routes/employeeRouter.js")


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

dotEnv.config()

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Mongoose connected Successfully")
}).catch((error)=>{
    console.lgo("MOngoose error",error)
})



app.use("/employees",employeeRouter);


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})