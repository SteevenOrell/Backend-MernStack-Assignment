const express = require("express");
const RoomRoute = express.Router();
const RoomModel = require("../Model/Room");


RoomRoute.route("/room-list").get((req,res)=>{

RoomModel.find((err,data)=>{

    if(err){

        console.log(err);
    }
    else{

res.json(data);

    }
}).sort({"Room":1})

})

RoomRoute.route("/room-add").post((req,res)=>{

RoomModel.create(req.body,(err,data)=>{
if(err){

    console.log(err)
}
else{console.log(`Data inserted successfully ${data}`)}

})

})

RoomRoute.route("/room-specific/:Room").get((req,res)=>{


    RoomModel.find({"Room":req.params.Room},(err,data)=>{
    if(err){console.log(err)}
    else{
        res.json(data);
        console.log(`Data ${data}`)}
    
    
    })
    
    })

//update problem
RoomRoute.route("/room-edit/:Room").put((req,res)=>{


RoomModel.update({"Room":req.params.Room},{$set : req.body},(err,data)=>{
if(err){console.log(err)}
else{console.log(`Data updated ${data}`)}


})

})

RoomRoute.route("/room-delete/:Room").delete((req,res)=>{

    RoomModel.deleteOne({"Room":req.params.Room},(err,data)=>{
    if(err){console.log(err)}
    else{console.log(`Data deleted ${data}`)}
    
    
    })
    
    })

    module.exports = RoomRoute;