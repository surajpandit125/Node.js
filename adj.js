// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Operation complete!');
//     }, 1000);
//   });
  
//   promise.then((result) => {
//     console.log(result); // Output: Operation complete!
//   });

const express=require('express');
const app=express();

app.get('',(req,res)=>{
    res.send("Plz god i am so tired")
})
app.get('/about',(req,res)=>{
    res.send("Plz god i am so tired help me")
})
app.get('/help',(req,res)=>{
    res.send("Plz god i am so tired  help me for job")
});
app.listen(5000);

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

  