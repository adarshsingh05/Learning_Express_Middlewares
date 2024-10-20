const express = require('express');
const app = express();
const morgan = require('morgan');
// getting the pages

app.use(morgan('tiny'))


app.get('/', (req,res)=>{
    res.send("Homepage")
})
app.get('/dogs', (req,res)=>{
    res.send("woof")
})

app.listen(3000, ()=>{
    console.log("started on the 3000")
})