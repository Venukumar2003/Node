const express = require("express")

const app = express()

const PORT = 3000

const userRouters = require("./routers/userRouter")
const productRouters = require("./routers/productRouter")
const orderRouters = require("./routers/orderRouter")




app.use(express.json())

app.use("/user",userRouters);

app.use("/product",productRouters);

app.use("/order",orderRouters);







app.listen(PORT,()=>{
    console.log(`Server is running on the ${PORT}`)
})