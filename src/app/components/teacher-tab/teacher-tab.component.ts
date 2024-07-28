import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-teacher-tab',
  templateUrl: './teacher-tab.component.html',
  styleUrls: ['./teacher-tab.component.css']
})
export class TeacherTabComponent implements OnInit {

  T:any=[];




  constructor(private router : Router,private uService:UserService) { }

  ngOnInit(): void {
    this.uService.getAllusers("teacher").subscribe(
      (data)=>{console.log("here in getallteachers BE ",data.user
      );
        this.T=data.user;
      }
    )



  }
  isvalidated(etat:string)
  {
    return etat=="NV";

  }
  gotoinfo(id:any)
  {

    this.router.navigate([`teacherInfo/${id}`]);
  }
  gotoedit(teacher:any)
  {
    this.uService.editTeacher(teacher).subscribe(
      (resp)=>{console.log("here into validate teacher resp from BE",resp.isEdited);
        if(resp.isEdited)
          {
            this.uService.getAllusers("teacher").subscribe(
              (data)=>{this.T=data.user;

              }
            )
          }
      }

    )
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
            (resp)=>{console.log("here into delete teacher resp from BE",resp.isDeleted);
              if(resp.isDeleted)
                {
                  this.uService.getAllusers("teacher").subscribe(
                    (data)=>{this.T=data.user;

                    }
                  )
                }
            }
          );

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });



    }

}
