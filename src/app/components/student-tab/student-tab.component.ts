import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourService } from 'src/app/services/cour.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-tab',
  templateUrl: './student-tab.component.html',
  styleUrls: ['./student-tab.component.css']
})
export class StudentTabComponent implements OnInit {
  T:any=[];
  courTab:any=[];
  courId:any;


  constructor(private uService:UserService,private router:Router,private cService:CourService) { }

  ngOnInit(): void {
    this.uService.getAllusers("student").subscribe(
      (data)=>{console.log("here in getallstudents BE ",data.user);
        this.T=data.user;
      }
    )
    this.cService.getAllCoursees().subscribe(
      (data)=>{
        this.courTab=data.cours;
      }
    )
  }
  gotoinfo(id:any)
  {

    this.router.navigate([`studentInfo/${id}`]);
  }




  delet(id:any)
    {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.uService.deleteuser(id).subscribe(
            (resp)=>{console.log("here into delete student resp from BE",resp.isDeleted);
              if(resp.isDeleted)
                {
                  this.uService.getAllusers("student").subscribe(
                    (data)=>{this.T=data.user;

                    }
                  )
                }
            }
          );
          Swal.fire({
            title: "Deleted!",
            text: "student has been deleted.",
            icon: "success"
          });
        }
      });



    }
    selectedCours(evt:any)
    {

      this.courId=evt.target.value;
      console.log(this.courId);
    }
    add(studentId:any)
{
console.log("here student id",studentId);
console.log("here cour id",this.courId);
let obj=
{
  sId:studentId,
  cId:this.courId

}
this.uService.addCourToStudent(obj).subscribe(
  (resp)=>{
   if(resp.isEdited=="is Added with succes")
   {
    Swal.fire({
      title: "succes",
      text: "Student is added",
      icon: "success"
    });
   }
   else if(resp.isEdited=="student is already in this course")
   {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "student is already in this course",

    });
   }
   else
   {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "check course availibility",

    });

   }
  }
);

}

}
