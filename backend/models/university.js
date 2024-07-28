// import mongoose module
const mongoose = require("mongoose");

const universitySchema = mongoose.Schema(
  {
    name:String,
    adr:String

  }
)
 //affect name to teacherSchema
const university =mongoose.model("University",universitySchema);

//make teacher exportable
module.exports=university;
