'use strict';
let express  = require('express');
let app =  express();
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
const fs = require('fs');
let filepath = process.env.userfile
console.log(filepath)
let rawdata = fs.readFileSync(filepath);
let list = JSON.parse(rawdata);

app.post('/user',async(req,res,next) =>{
    let data={};
    data["name"] = req.body.name;
    data["age"] = req.body.age;
    data["email"]= req.body.email;
    console.log("user is added")
    list.push(data);
    res.status(304).send(data);
})

app.get('/user',async(req,res,next) =>{
    console.log("requested");
    res.send(list);
})
app.get('/user/:id',async(req,res,next) =>{
    let id = req.params.id;
    console.log("user request ID: "+ id);
    res.status(200).send(list[id-1]);
})
app.get('/healthy',async(req,res,next)=>{
    console.log("health status")
    res.status(200).send();
})
app.listen(3000, function (err) {
    console.log("user service is runing")
})
