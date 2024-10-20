const express = require('express');
const app = express();
const morgan = require('morgan');
// getting the pages

// app.use(morgan('tiny'))
// creating own middle ware
app.use((req,res,next)=>{
    console.log(req.method.toUpperCase());
    next();
})
app.get('/', (req,res,next)=>{
    console.log("first middle ware");
    next();
    console.log("hi there i am in between")
})
app.get('/', (req,res,next)=>{
    console.log("second middle ware");
    next();
})


app.get('/', (req,res)=>{
    res.send("Homepage")
})
app.get('/dogs', (req,res)=>{
    res.send("woof")
})
// setting up 404 route
app.use((req,res)=>{
    res.status(404).send('Not  found')
})
app.listen(3000, ()=>{
    console.log("started on the 3000")
})