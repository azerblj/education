// import mongoose module
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  tel: String,
  kidtel: String,
  adr: String,
  pwd: String,
  speciality: String,
  role:String,
  etat:String,
  path:String,
  coures:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Cour",

    },
  ],
  coursStudent: [
    {
      courses: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cour",
      },
      grade: Number,
      evaluation: String,
    },
  ],



});

//affect name to matchSchema
const user =mongoose.model("User",userSchema);

//make model exportable
module.exports = user;
