// const fs = require("fs");
// // const http = require("http");

// // const server = http.createServer((req, resp) =>{
// //     resp.writeHead(200,{'Content-Type':'application\json'});
// //     resp.write(JSON.stringify())
// //     resp.end();
// // }).listen(5000);


// const input = process.argv;

// if(input[2]=='add')
// {
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove')
// {
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("invalid input");
// }


// const fs = require('fs')
// const path = require('path');
// const dirpath = path.join(__dirname,'file');
// const filepath =`${dirpath}/suraj.txt`;

// fs.writeFileSync(filepath,"plz GOD help me i am so tired");
//     fs.readFile(filepath,'utf8', (error,item)=>{
//     console.log(item)
//     })


// fs.writeFile('newFile.js', "plz god help me", (e) =>{
//     if(e)
//     console.log(e);
//     else{
//         console.log('File create successfully');
//     }
// })

const express = require('express');
const path = require('path');

const app =express();
const publicPath=path.join(__dirname,'public');

app.listen(5000);
