const http=require("http");

const myserver=http.createServer((req,res)=>{
      console.log("New request reached");
      console.log(req.headers);
      res.end("Heloo My Name is Anurag Aman");
});

myserver.listen(8001,()=>{
    console.log("server started");
});