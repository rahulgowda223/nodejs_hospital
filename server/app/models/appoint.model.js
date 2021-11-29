const mongoose = require("mongoose");

const Appoint = mongoose.model(
  "Appoint",
  new mongoose.Schema({
    username: String,
    email:String,
    doctorname:String
  })
);

module.exports = Appoint;