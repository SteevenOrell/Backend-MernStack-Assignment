const mongoose = require("../db");
let Schema = mongoose.Schema;

AdminSchema = new Schema({

"Username":String,
"Password":String,




},{collection:"Admin"});

let adminModel = mongoose.model("AdminModel",AdminSchema);

module.exports = adminModel;