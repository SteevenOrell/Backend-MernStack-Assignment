const mongoose = require("../db");
let Schema =  mongoose.Schema

let RoomSchema = new Schema({


"Room" : String,
"CreatedDate": String,
"EditDate" : String,
"Status" : String
},{collection: "Room"});

let RoomModel = mongoose.model("RoomModel",RoomSchema);

module.exports = RoomModel;