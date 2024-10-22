const http=require("http");
const fs=require("fs");
const url=require("url");


const myserver=http.createServer((req,res)=>{
      console.log("New request reached");
    //   console.log(req.headers);
    if(req.url==="/favicon.ico")
        return res.end();
    const log= `${Date.now()} : ${req.url}:method:${req.method} :New Request\n`
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
                    if(req.method==="GET"){ 
                        res.end("Homepage");
                        break;
                    }
                case "/about":
                    res.end(`hlw ,${name}`);
                    break;

                // here i am writing the case of how youtube ,google works
                case "/search":
                    const result=myurl.query.search_query;
                    res.end(`Here are your results for ${result}`);  
                    break;

                case"/signup":
                 if(req.method==="GET")
                 {
                    res.end("this is signup page");
                 }
                 else if(req.method==="POST")
                 {
                    res.end("sucessfully signup");
                 }

                default:
                    res.end("404 route Not found");
                    
            } 
        }     
    });
     
});

myserver.listen(8001,()=>{
    console.log("server started");
});