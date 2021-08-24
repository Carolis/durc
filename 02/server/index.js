const express = require("express")
const app = express()

app.get('/', (req,res)=>{
  res.send('Hewwo')
})

app.listen(3001, () => {
  console.log("Server up at 3001 port")
})
