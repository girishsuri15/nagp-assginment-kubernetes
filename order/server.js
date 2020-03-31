'use strict';
let express  = require('express');
let app =  express();
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
const fs = require('fs');
let rawdata = fs.readFileSync('/mnt/order.json');
let list = JSON.parse(rawdata);



app.get('/order',async(req,res,next) =>{
    console.log("requested");
    res.send(list);
})
app.get('/order/:id',async(req,res,next) =>{
    let id = req.params.id;
    console.log("user request ID: "+ id);
    res.status(200).send(list);
})
app.get('/healthy',async(req,res,next)=>{
    console.log("health status")
    res.status(200).send();
})
app.listen(3000, function (err) {
    console.log("user service is runing")
})
