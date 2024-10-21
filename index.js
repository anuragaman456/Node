const http=require("http");
const fs=require("fs");


const myserver=http.createServer((req,res)=>{
      console.log("New request reached");
    //   console.log(req.headers);
    const log= `${Date.now()} : New Request\n`
    fs.appendFile("log.txt",log,(err)=>{
       if(err)
            console.log("Errorfound!");
       else
           res.end("This is the resposnse that i am sending to user");         
    });
     
});

myserver.listen(8001,()=>{
    console.log("server started");
});