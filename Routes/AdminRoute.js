const express = require("express");
let AdminRouter = express.Router();
let adminModel = require("../Model/Admin");


AdminRouter.route('/admin').get((req,res)=>{

adminModel.find((err,data)=>{

if(err){console.log(err)}
else{

    res.json(data);
}

})


})

module.exports = AdminRouter;