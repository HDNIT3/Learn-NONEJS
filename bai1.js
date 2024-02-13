
const express = require("express")
const { port } = require("./config/port")

const app = express()

app.get("/",(req,res)=>{
   res.send("hell111")
})

app.listen(port,()=>{
   console.log(`sever is start on ${port}`)
})