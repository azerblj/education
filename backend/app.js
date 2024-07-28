/*************** Modules Importation ************/
// import express module
const express = require("express");
// import body parser module
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require("mongoose");
// import bcrypt module
const bcrypt = require("bcrypt");
// import jsonwebtoken module
const jwt = require('jsonwebtoken');
// import express-session module
const session = require('express-session');
// imprt multer module
const multer=require("multer");
// import path module a ne pas installer
const path=require("path");
// educDB =>DB name
mongoose.connect('mongodb://127.0.0.1:27017/educDB');

/*************** Express Application ************/
// creates express application
const app = express();

/*************** models importation ************/
const Teacher = require("./models/teacher");
const Cour = require("./models/course");
const User = require("./models/user");
const University = require("./models/university");
const { first } = require("rxjs");


/*************** App Configuration ************/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );

    next();
});

// Secretkey configuration
const secretKey = 'your-secret-key';
app.use(session({
secret: secretKey,
}));

//multer configuration

//define a short cut for a long path
app.use('/shortCut', express.static(path.join('backend/photos')));
app.use('/shortCut1', express.static(path.join('backend/pdf')));
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
 }
 const MIME_TYPE2 = {
  'application/pdf': 'pdf',

 }
 const storageConfig = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
  const isValid = MIME_TYPE[file.mimetype];
  const isValid2=MIME_TYPE2[file.mimetype];
  if (isValid) {
  cb(null, 'backend/photos');
  }
  else if(isValid2)
  {
    cb(null, 'backend/pdf');
  }
  },
  filename: (req, file, cb) => {
  const name = file.originalname.toLowerCase().split(' ').join('-');
  const isValid = MIME_TYPE[file.mimetype];
  const isValid2=MIME_TYPE2[file.mimetype];
  if(isValid)
  {const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-education-' + '.' +
  extension;
  cb(null, imgName);
  }
  else if(isValid2)
  {const extension2 = MIME_TYPE2[file.mimetype];
    const imgName = name + '-' + Date.now() + '-education-' + '.' +
  extension2;
  cb(null, imgName);
  }
  }
  });



/*************** Business Logics ************/
// Business Logic: Edit teacher
app.put("/api/users", (req, res) => {
  // Instructions
  let newTeacher=
  {
    _id:req.body._id,
    etat:"V",
    role:req.body.role,
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    tel:req.body.tel,
    adr:req.body.adr,
    speciality:req.body.speciality,
    pwd:req.body.pwd,
  }
  console.log("Here into BL: Edit teacher ",req.body);
  User.updateOne({_id:req.body._id},newTeacher).then(
    (resp)=>{console.log(resp)
      if (resp.nModified==1) {
        res.json({isEdited:true});

      }
      else
      {
        res.json({isEdited:false});
      }
    }
  )
});

// Business Logic: Get All users
app.get("/api/users/:role", (req, res) => {
  // Instructions
  console.log("Here into BL: Get All teachers");
  User.find({role:req.params.role}).then(
    (data)=>{
      console.log(data)
      res.json({user:data});
    }
  )
});

// Business Logic: Delete user By ID
app.delete("/api/users/:id", (req, res) => {
  // Instructions
  console.log("Here into BL: Delete user By ID",req.params.id);
  User.deleteOne({_id:req.params.id}).then(
    (resp)=>{
      if (resp.deletedCount==1) {
        res.json({isDeleted : true});

      } else {
        res.json({isDeleted : false});

      }
    }
  )

});

// Business Logic: Get user By ID
app.get("/api/users/info/:id", (req, res) => {
  // Instructions
  console.log("Here into BL: Get user By ID",req.params.id);
 User.findById(req.params.id).populate('coursStudent.courses').populate('coures').then(
  (doc)=>{res.json({user : doc}
 )
         });



});
// Business Logic: Get user By tel
app.get("/api/users/findtel/:tel", (req, res) => {
  // Instructions
  console.log("Here into BL: Get user By tel",req.params.tel);
 User.findOne({tel:req.params.tel,role:'student'}).populate('coursStudent.courses').then(
  (doc)=>{res.json({user : doc}
 )
 console.log(doc)
         });



});
// Business Logic: Get Grade
app.post("/api/users/grade", (req, res) => {
  // Instructions
  console.log("Here into BL: Get grade",req.body);
 User.findOne({'coursStudent.courses':req.body.courId,_id:req.body.studentId}).then(
  (doc)=>{
    console.log("here grade obj",doc.coursStudent);
    res.json({cour:doc.coursStudent});
  }
 )
         });








// Business Logic: Add cour
app.post("/api/courses", (req, res) => {
  // Instructions
  console.log("Here into BL: Add cour",req.body);
User.findById(req.body.teacherId).then(
  (doc)=>{
    console.log(doc);
    if(!doc)
    {

      res.json({isAdded : false});
    }
    else{
      let cour={
        description:req.body.description,
        duration:req.body.duration,
        title:req.body.title,
        teacher:doc._id
      }
      let courObj=new Cour(cour);
 courObj.save(
  (err,courObj)=>{
    if(err)
    {res.json({isAdded : false});}
    else
    {
      doc.coures.push(courObj);
      doc.save();
      res.json({isAdded : true});

    }
  }
 );


    }
  }
)

});

// Business Logic: Edit cour
app.put("/api/courses", (req, res) => {
  // Instructions
  console.log("Here into BL: Edit cour ",req.body);
  Cour.updateOne({_id:req.body._id},req.body).then(
    (resp)=>{console.log(resp)
      if (resp.nModified==1) {
        res.json({isEdited:"succes"});

      }
      else
      {
        res.json({isEdited:"echec"});
      }
    }
  )
});

// Business Logic: Get All cours
app.get("/api/courses", (req, res) => {
  // Instructions
  console.log("Here into BL: Get All courses");
  Cour.find().populate('teacher').then(
    (data)=>{
      console.log("data");
      res.json({cours:data});
    }
  )
});
// Business Logic: Get course by teacher id
app.get("/api/courses/find/:id", (req, res) => {
  // Instructions
  console.log("Here into BL: Get  cours by teacherId");
  Cour.find({teacher:req.params.id}).populate('students').then(
    (data)=>{
      console.log("data");
      res.json({cour:data});
    }
  )
});
// Business Logic: Get course by student id
app.get("/api/courses/findstudent/:id", (req, res) => {
  // Instructions
  console.log("Here into BL: Get  cours by teacherId");
  Cour.find({students:req.params.id}).populate('teacher').then(
    (data)=>{
      console.log("data");
      res.json({cour:data});
    }
  )
});
// Business Logic: Delete cour By ID
app.delete("/api/courses/:id", (req, res) => {
  // Instructions
  console.log("Here into BL: Delete cour By ID",req.params.id);
  Cour.deleteOne({_id:req.params.id}).then(
    (resp)=>{
      if (resp.deletedCount==1) {
        res.json({isDeleted : true});

      } else {
        res.json({isDeleted : false});

      }
    }
  )
});

// Business Logic: Get cour By ID
app.get("/api/courses/:id", (req, res) => {
  // Instructions
  console.log("Here into BL: Get cour By ID",req.params.id);
  Cour.findById(req.params.id).populate('teacher').populate('studentGrades.student').then(
   (doc)=>{
    res.json({ cour : doc} )
    console.log(doc);
          });

});

// Business Logic: Add University
app.post("/api/universitys", (req, res) => {
  // Instructions
  console.log("Here into BL: Add university",req.body);
  let universityObj=new University(req.body);
  universityObj.save();
  res.json({isAdded : true});
});
// Business Logic: Get All universitys
app.get("/api/universitys", (req, res) => {
  // Instructions
  console.log("Here into BL: Get All universitys");
  University.find().then(
    (data)=>{
      res.json({universitys:data});
    }
  )
});



// Business Logic: Add user(signup)
app.post("/api/users/signup",multer({storage:storageConfig}).single("img"),(req,res)=>{
  console.log("here into signup",req.body);
 User.findOne({ tel: req.body.tel}).then(
  (reponce)=>{console.log(reponce);
    if (!reponce) {
      bcrypt.hash(req.body.pwd,10).then(
        (cryptedpwd)=>{console.log("here crypted pwd",cryptedpwd);
          req.body.pwd=cryptedpwd;
          if (req.body.role=='student') {
            if (req.file) {
              req.body.path=`http://localhost:3000/shortCut/${req.file.filename}`;

             } else {
              req.body.path='http://localhost:3000/shortCut/avatar.jpeg';

             }

          } else if(req.body.role=='teacher') {
            if (req.file) {
              req.body.path=`http://localhost:3000/backend/pdf/${req.file.filename}`;

             }

          }

          let user=new User(req.body);
          user.save();
          res.json({isAdded:true});
        }
      );


    } else {
      res.json({isAdded:false});

    }

  }
 );

});

// Business Logic: Login
app.post("/api/users/login",(req,res)=>
  {
  console.log("here login BE",req.body);
  User.findOne({tel:req.body.tel}).then(
    (response)=>{
      console.log("here response",response);
      if (!response) {
        res.json({msg:"check your phone number"})

      } else {
        bcrypt.compare(req.body.pwd,response.pwd).then(
          (cryptedResult)=>{
            console.log("here cryptedresult",cryptedResult);
            if (!cryptedResult) {
              res.json({msg:"check your Password"});
            } else {
              let userToSend ={
                role:response.role,
                firstName:response.firstName,
                lastName:response.lastName,
                email:response.email,
                tel:response.tel,
                kidtel:response.kidtel,
                speciality:response.speciality,
                adr:response.adr,
                etat:response.etat,

                id:response._id
              };
              const token = jwt.sign( userToSend, secretKey, { expiresIn: '1h' });
              console.log("here token",token);

              res.json({ msg : "welcome" ,user:token})

            }
           }
        )

      }
    }
  )
  });
// Business Logic: search Kid by phone number
app.post("/api/users/search", (req, res) => {
  // Instructions
  console.log("Here into BL: searchkid",req.body);
 User.find({tel:req.body.kidtel,role:'student'}).then(
  (docs)=>{
    console.log("search result",docs);

    if((docs.length==1))

    {res.json({kid : true});}
    else
    {res.json({kid : false});}


  }
 );
});
// Business Logic: add cour to student
app.put("/api/users/add", (req, res) => {
  User.findById(req.body.sId).then(
    (student)=>{
      if(!student)
      {
        res.json({isEdited:"student is not available"})
      }
      else
      {
        Cour.findById(req.body.cId).then(
          (cour)=>{
            if(!cour)
            {res.json({isEdited:"course is not available"})}
            else
            {
              User.findOne({_id:student._id,'coursStudent.courses':cour._id}).then(
                (data)=>{
                  if(data)
                  {
                    res.json({isEdited:"student is already in this course"})
                  }
                  else
                  {
                    let obj2={
                      courses:cour._id,
                      grade:null,
                      evaluation:null,
                    }
                    let obj={
                      student:student._id,
                      grade:null,
                      evaluation:null,
                    }
                    student.coursStudent.push(obj2);
              student.save();

              cour.studentGrades.push(obj);
              cour.save();
              res.json({isEdited:"is Added with succes"});

                  }
                }
              )



            }
          }
        )
      }
    }
  )
})
app.post("/api/courses/grades", (req, res) => {
  console.log("here into BL add grades to students",req.body);
  Cour.findById({_id:req.body.courId}).then(
    (cour)=>{
      if(!cour)
      {
        res.json({isAdded:"course is not available"})
      }
      else
      {
        User.findById({_id:req.body.studentId}).then(
          (st)=>{
            if(!st)
              {
                res.json({isAdded:"student is not available"})
              }
              else{


            Cour.findOne({_id:req.body.courId,'studentGrades.student':req.body.studentId}).then(
              (data)=>{
                console.log(data);
                if(!data)
                {
                  req.json({isAdded:"erreur 404"})
                }
                else
                {
                  Cour.updateOne(
                    { 'studentGrades.student': req.body.studentId,_id:req.body.courId },
                    {
                        $set: {
                            'studentGrades.$.grade': req.body.note,
                            'studentGrades.$.evaluation': req.body.evaluation,
                        },
                    },

                  ).then(
                    (resp)=>{
                      if (resp.nModified==1) {
                        User.updateOne(
                          {'coursStudent.courses':req.body.courId,_id:req.body.studentId},
                          {
                            $set: {
                                'coursStudent.$.grade': req.body.note,
                                'coursStudent.$.evaluation': req.body.evaluation,
                            },
                        },


                        ).then(
                          (studentresp)=>{
                            if(studentresp.nModified==1)
                            {
                              res.json({isAdded:"changed succesfully"});

                            }
                            else
                            {
                              res.json({isAdded:"echec in student changement"});

                            }
                          }
                        )



                      }
                      else
                      {
                        res.json({isAdded:"echec changement"});
                      }
                    }


                  )

                  //data.studentGrades.grade=req.body.note;
                  //data.studentGrades.evaluation=req.body.evaluation;
                  //console.log("here data",data);

                 // data.save();


                }

              }
            )
          }
          }
        )

      }
    }
  )
})



/*************** App Exportation ************/
// make app importable
module.exports = app;
