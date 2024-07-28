import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { CourService } from 'src/app/services/cour.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-grades-tab',
  templateUrl: './grades-tab.component.html',
  styleUrls: ['./grades-tab.component.css']
})
export class GradesTabComponent implements OnInit {
  T:any=[]
  decoded:any;
  teacherId:any;
  Id:any;
  studentId:any;
  courId:any;
  grades:any={};

  courtab:any=[];
  gradeObj:any={};



  constructor(private cService:CourService,private formbuilder:FormBuilder,private router:Router,private uService:UserService) { }

  ngOnInit(): void {


    let token:any =sessionStorage.getItem('jwt');
    if (token) {
      this.decoded=jwtDecode(token);
      this.teacherId=this.decoded.id;
      console.log("here teacher id",this.teacherId);
      this.cService.getcoursesbyteacher(this.teacherId).subscribe(
        (data)=>{
          console.log("here into les cour de ce teacher",data.cour)
          this.T=data.cour}
      )
  }
  }
  selectedStudent(evt:any)
  {

    this.studentId=evt.target.value;
    console.log(this.studentId);
    let obj=
    {
      studentId:this.studentId,
      courId:this.courId
    }
    this.uService.getGrade(obj).subscribe(
      (data)=>{
        console.log("here grades ",data.cour);
         for (let i = 0; i < data.cour.length; i++) {
      console.log("here course id",data.cour[i].courses);
      if (data.cour[i].courses==this.courId) {
        let obj2=
        {
          note:data.cour[i].grade,
          eva:data.cour[i].evaluation
        }
        this.grades=obj2;
        console.log("here eva",this.grades);



        break;

      }

    }
      }
    );


  }
  selectedcour(evt:any)
  {

    this.courId=evt.target.value;
    console.log(this.courId);
    this.cService.getCourseById(this.courId).subscribe(
      (data)=>{
        console.log(data);
        this.courtab=data.cour;
      }
    )

  }
  add()
  {
    console.log("this is cour id",this.courId);
    console.log("this is student id",this.studentId);
    console.log('here note',this.grades.note);
    console.log('here eva',this.grades.eva);
    let gradeObj={
      courId:this.courId,
      studentId:this.studentId,
      note:this.grades.note,
      evaluation:this.grades.eva
    }
    Swal.fire({
      title: "Are you sure?",
      text: "you want to add this Note!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,ADD"
    }).then((result) => {
      if (result.isConfirmed) {
        this.cService.addGradesToStudent(gradeObj).subscribe(
          (msg)=>{
            console.log(msg.isAdded);
            if(msg.isAdded=='changed succesfully')
            {
              Swal.fire({
                title:'Added',
                text: "note and evaluation has been added",
                icon: "success"
              });


            }
            else{
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",

              });
            }


          }

        );
        this.router.navigate(['teacherDashboard']);


      }})


  }
  color(note:number)
  {
    if (note>=10) {
      return "green";

    } else {

      return "red";
    }

  }

}
