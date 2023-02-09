const express = require("express")
const jwt = require("jsonwebtoken")
const secretkey = "secretkey";
const app = express()

const userRouter = require("./api/candidates/router")

app.use(express.json());

app.use("/api/candidates",userRouter)

app.listen(6000,()=>{
  console.log("App is running on 6000 port")
})