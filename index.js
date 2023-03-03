
// // const express = require('express');
// // const path = require('path');
// // const ejs = require('ejs');

// // const app =express();
// // const publicPath=path.join(__dirname,'public');
// // app.set('view engine', 'ejs');

// // app.get('/about',(_, resp)=>{
// //     resp.sendFile(`${publicPath}/about.html`)
// // })

// // app.get('/profile',(_,resp)=>{
// //     const user={
// //         name:'suraj',
// //         email:'suraj@.com',
// //         city:'delhi',
// //     Skills:['js,node.js,react.js']
// //     }
// //     const posts = [
// //         { title: 'Post 1', content: 'This is the content of post 1.' },
// //         { title: 'Post 2', content: 'This is the content of post 2.' },
// //         { title: 'Post 3', content: 'This is the content of post 3.' }
// //       ];
      
// //     resp.render('profile',{user});
// //     // resp.render('profile',{posts});

// // })

// // // app.use(express.static(publicPath));

// // app.listen(5000); 


// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';

// const databaseName = 'e-commerce'
// const client = new MongoClient(url);

// // async function getData() 
// async function getData()
// {
//     let res= await client.connect();
//     let db = res.db(databaseName);
//     // return db.collection('products');
//     let collection = db.collection('products');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }
// getData();
// // dbConnect();
// // dbConnect().then((resp)=>{
// //     resp.find().toArray().then((data)=>{
// //         console.warn(data)
// //     })
// // })

// // const main = async ()=>{
// //     // console.log("main function");
// //     let data = await dbConnect();
// //     data =await data.find().toArray();
// //     console.log(data);
// // }
// // main();

const MongoClient = require('mongodb').MongoClient;
const uri ='mongodb://localhost:27017/e-commerce';
const client= new MongoClient(uri,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
}) ;

client.connect(err =>{
    if(err){
        console.log('Error connecting to MongoDB');
    }else{
        console.log('Connected to MongoDB successfully');
    }
})
const collection=client.db().collection('products');

collection.insertOne({name:'john',email:'john@123.com'},(err,result)=>{
    if(err){
        console.log('Error inserting document:', err);
    }else{
        console.log('inserted successfully:',result)
    }
});

client.close();