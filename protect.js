const express = require('express');
const app = express();

app.listen(4000,()=>{
    console.log('listenning on 4000 for protecting')
})

app.get('/',(req,res)=>{
    res.send('homepage for the protect route')
})
app.get('/ejs',(req,res)=>{
    res.send('page-3')
})

app.use((req,res,next)=>{
    console.log(req.query);
    next();
})