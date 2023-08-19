const express = require("express")

const app =express()

const PORT = 5000

app.get("/",(req,res)=>{
    res.send("Hello From Root side")
})

app.listen(PORT , ()=>{
    console.log("serVer started");
})