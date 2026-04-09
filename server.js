// const express = require("express")

// const app = express()

// const PORT = 3000


// const userRouter = require("./routes/userRoutes");
// const productRouter = require("./routes/productsRoutes");
// const cartRouter= require("./routes/cartRoutes");



// app.use(express.json());

// app.use("/",userRouter);
// app.use("/",productRouter);
// app.use("/",cartRouter);



// const CartController = require("./controllers/cartController")



// app.listen(PORT,()=>{
//     console.log(`Server is runnig on ${PORT}`)
// })





let express = require("express");
let app = express();

let PORT = 3000;

const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productsRoutes");
const cartRouter = require("./routes/cartRoutes");

app.use(express.json());


app.use("/",userRouter)
app.use("/",productRouter)
app.use("/",cartRouter)



app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})


