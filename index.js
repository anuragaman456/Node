const http =require("http");
const express=require("express");

const app=express();

app.get("/",(req,res)=>
{
    console.log("new reaquest reached");
    return res.send("hey there");
});

app.get("/about",(req,res)=>{
    console.log(req.query.username);

    return res.send("This is about page"+req.query.username);
    
});


app.listen(8000,()=>{console.log("your server started")});