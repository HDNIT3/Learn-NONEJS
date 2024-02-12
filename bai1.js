const http = require("http")

const server = http.createServer((req,res)=>{
   console.log("web is Starting")
   res.write("chao nha")
   res.end()
})

server.listen(3000);