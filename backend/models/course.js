// import mongoose module
const mongoose = require("mongoose");

const courSchema = mongoose.Schema(
  {
    title:String,
    description:String,
    duration:String,
    teacher:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
    },

    studentGrades: [
      {
        student: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        grade: Number,
        evaluation: String,
      },
    ],


  }
)
 //affect name to courSchema
const cour =mongoose.model("Cour",courSchema);

//make cour exportable
module.exports=cour;
