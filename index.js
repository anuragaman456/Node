const http=require("http");
const fs=require("fs");


const myserver=http.createServer((req,res)=>{
      console.log("New request reached");
    //   console.log(req.headers);
    const log= `${Date.now()} : ${req.url} :New Request\n`
    fs.appendFile("log.txt",log,(err)=>{
       if(err)
            console.log("Errorfound!");
       switch(req.url)
       {
         case "/":
            res.end("Homepage");
            break;
         case "/about":
            res.end("This is abot page");
            break;
         default:
            res.end("404 route Not found");
            
       }      
    });
     
});

myserver.listen(8001,()=>{
    console.log("server started");
});