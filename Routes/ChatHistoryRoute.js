let express = require("express");
let ChatHistoryRouter = express.Router();
const UserHistmodel = require('../Model/ChatHistory');

ChatHistoryRouter.route("").get((req,res)=>{

//Welcome page Backend;
res.send('<h1>Welcome to the back-end page of Steeven Orell Wemin </h1>')


})

ChatHistoryRouter.route("/chat-history").get((req,res)=>{
UserHistmodel.find((err,data) =>{

if(err){ console.log(err)}
else{
    res.json(data);

}

}).sort({"Date":1})
 
})



module.exports = ChatHistoryRouter;
