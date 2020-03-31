const axios=require('axios');
var qs = require('qs');



const GetOrderDetail = async function (id) {
    const fs = require('fs');
    let rawdata = fs.readFileSync('/mnt/appURL.json');
    let appUrl = JSON.parse(rawdata);
    console.log(appUrl)
    let userurl=appUrl["userURL"];
    let orderurl=appUrl["orderURL"];
    console.log(userurl)
    // try{
    // let data = await Promise.all([ axios.get("https://jsonplaceholder.typicode.com/todos/1"),axios.get("http://dummy.restapiexample.com/api/v1/employees")]);
    // console.log(data[1].data.data[0])
    // let agg={}
    //  agg["userDetails"]= data[0].data;
    //  agg["orders"]=data[1].data.data[0];
    //  console.log("aggg   "+agg);
    //  return agg;
    try{
    console.log(userurl+"/user/"+id)
    console.log(orderurl+"/order/"+id)
    let data = await Promise.all([axios.get(userurl+"/user/"+id),axios.get(orderurl+"/order/"+id)]);
    console.log(data[0].data);
    console.log(data[1].data);
    let agg={}
    agg["userDetails"]= data[0].data
    agg["orders"]=data[1].data["orders"]
    console.log("aggg   "+agg);
    return agg;
    }catch (e) {
        console.error(e);
    }
  }
 
module.exports = {
    GetOrderDetail
};
