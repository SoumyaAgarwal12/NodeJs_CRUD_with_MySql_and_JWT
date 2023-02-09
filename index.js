const express = require("express")
const app = express()

const userRouter = require("./api/candidates/router")
const generateToken = require("./api/candidates/router")

app.use(express.json());

app.use("/api/candidates",userRouter)
app.use("/",generateToken);

app.listen(6000,()=>{
  console.log("App is running on 6000 port")
})