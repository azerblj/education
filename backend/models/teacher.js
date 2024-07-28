// import mongoose module
const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema(
  {
    name:String,
    speciality:String,
    experience:String,

  }
)
 //affect name to teacherSchema
const teacher =mongoose.model("Teacher",teacherSchema);

//make teacher exportable
module.exports=teacher;
