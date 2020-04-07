const express = require("express");
const EventsLogsRouter = express.Router();
const EventLogsModel = require("../Model/EventLogs");
//seperate route displaying eventlog json list 

EventsLogsRouter.route("/event-log").get((req,res)=>{

    EventLogsModel.find((err,data)=>{

  if(err){console.log(err)}
 else{res.json(data); 
     }

    }).sort({"Date":1})
})

module.exports = EventsLogsRouter;