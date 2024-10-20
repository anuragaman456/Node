

const fs=require("fs");

// doing syncronously means thread has to wait there upto when that write fs will not execute

// fs.writeFileSync("./file.txt","Hlw i am going to write in this file.txt");


// doing fle handling Asyncronously means thread move forward and do under
// calculation and event loop calcultion is done and wait in que to execcute afte the lopp will done then it execute 
fs.writeFile("./file.txt","Hlw i am going to write thisrd time in this file.txt",(err)=>
{
    if(err)
        console.log("eEroor while file handling");
    else
        console.log("file handling write done succesfully");
});
for(let i=0;i<10;i++)
{
    console.log(i);
}
    

const fileContent=fs.readFileSync("./file.txt","utf-8");
//const fileContent=fs.readFile("./file.txt","utf-8");
console.log(fileContent);

fs.readFile("./file.txt","utf-8",(err,data)=>
{
    if(err)
    {
        console.log("Error occur while reading in file (file.txt)");
    }
    else
        console.log("result:",data);
});

fs.appendFile("./file.txt",`\n hi there now i am going to append this text in the file.txt`,(err)=>{
   
    if(err)
    {
        console.log("Eroor in appending file");
    }
    else
    {
        console.log("Successfully appended");
    }
});

fs.readFile("./file.txt","utf-8",(err,data)=>{
      if(err)
        console.log("eroor while rading file.txt");
      else
        console.log("data is->",data);
});  


