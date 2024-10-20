const express = require('express');
const app = express();

app.listen(4000,()=>{
    console.log('listenning on 4000 for protecting')
})

app.get('/',(req,res)=>{
    res.send('homepage for the protect route')
})