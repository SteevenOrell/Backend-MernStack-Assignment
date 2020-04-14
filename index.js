const express = require('express');
const app = express();
const http = require("http").createServer(app);
const body_parser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 7000;

const userChatRouter = require("./Routes/ChatHistoryRoute");
const eventLogsRouter = require("./Routes/EventsLogsRoute");
const adminRouter = require('./Routes/AdminRoute');
const roomRooter = require("./Routes/RoomRoute");

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));
app.use(cors());

app.use(express.static(__dirname));
app.use(express.static(`${__dirname}/public`))
app.use(["/api","/"],userChatRouter,eventLogsRouter,roomRooter,adminRouter) ;




    http.listen(port,()=>{

       
     console.log("Listen to port")
     

    });
