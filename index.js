const http=require("http");
const fs=require("fs");
const url=require("url");


const myserver=http.createServer((req,res)=>{
      console.log("New request reached");
    //   console.log(req.headers);
    if(req.url==="/favicon.ico")
        return res.end();
    const log= `${Date.now()} : ${req.url} :New Request\n`
    if(req.url===" /favicon.ico")
        return res.end();

    const myurl=url.parse(req.url,true);
    console.log(myurl);
    fs.appendFile("log.txt",log,(err)=>{
       if(err)
            console.log("Errorfound!");
       else{    
             const name=myurl.query.username;
            switch(myurl.pathname)
            {
                case "/":
                    res.end("Homepage");
                    break;
                case "/about":
                    res.end(`hlw ,${name}`);
                    break;
                default:
                    res.end("404 route Not found");
                    
            } 
        }     
    });
     
});

myserver.listen(8001,()=>{
    console.log("server started");
});