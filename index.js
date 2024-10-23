const http =require("http");
const express=require("express");
const users=require("./MOCK_DATA.json");
const fs=require("fs");

const app=express();

app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>
{
    console.log("new reaquest reached");
    return res.json("Homepage");
});

app.get("/users",(req,res)=>{
     const html=`
    <ul>
       ${users.map((user)=>`<li>${user.first_name}</li>`)};
    </ul>
    ` 
    return res.send(html);
});
app.get("/api/users/:id",(req,res)=>
{
    const userid=parseInt(req.params.id);
    const user_detail=users.find((user)=>user.id===userid);
    return res.json(user_detail);
});

app.get("/api/users",(req,res)=>{   // for good practise means agar koi mobile, flutter ,alexa
   // console.log("body",req.body)                          // se call mare to json format me chal jaye and browser se mare to html
    return res.json(users);         // render kr do server side rendering me
    
});

app.post("/api/users",(req,res)=>{
     const body=req.body;
     console.log(body);
     users.push({...body,id:users.length+1});
     fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err)=>{
        if(err)
        {
            res.send({status:"eroor"});
        }
        else
        {
            res.send({status:"sucessfully Added",id:users.length});
        }
     });
    });

app.patch("/api/users/:id",(req,res)=>
{
    
  const user_id=parseInt(req.params.id);
  const user_index=users.findIndex((user)=>user.id===user_id);
  const updated_data=req.body;
  if(user_index==-1)
  {
    return res.send({status:"Error"});
  }
   
  users[user_index]=({...users[user_index], ...updated_data});
  console.log(`User ID: ${user_id}, User Index: ${user_index}`);


  fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err)=>
{
     if(err)
        res.send({status:"Eroor"});
    else
        res.send({status:"sucessfully updated or patched", id:user_id});
});

});

app.delete("/api/users/:id",(req,res)=>{
    const user_id=parseInt(req.params.id);
    const index=users.findIndex((user)=>user.id===user_id);
    if(index==-1)
        res.send({status:"error"});
    
    else{
           users.splice(index,1);
        fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err)=>{
           if(err)
              res.send({status:"error"});
           else
              res.send({status:"Sucessfully_deleted",id:user_id});
             
        });
    }
    

});






app.get("/api/about",(req,res)=>{
    console.log(req.query.username);

    return res.send("This is about page"+" "+req.query.username);
    
});


app.listen(8000,()=>{console.log("your server started ");
    
});





// app.use(express.urlencoded({ extended: false }));


// app.post("/api/users",(req,res)=>{
//     const body=req.body;
//     users.push({...body,id:users.length+1});
//     fs.writeFile("./Mock.json",JSON.stringify(users),(err,data)=>{
//         return res.json({status:sucess,id:users.length});
//     })
// });