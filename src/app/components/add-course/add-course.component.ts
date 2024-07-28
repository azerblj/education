import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { CourService } from 'src/app/services/cour.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  cour:any={};
  courForm!:FormGroup;
  decoded:any;
  teacherId:any;
  constructor(private cService:CourService,private router:Router) { }

  ngOnInit(): void {
    let token:any =sessionStorage.getItem('jwt');
    if (token) {
      this.decoded=jwtDecode(token);
      this.teacherId=this.decoded.id;
      console.log("here teacher id",this.teacherId);
  }

  }


  add()
  {
    this.cour.teacherId=this.teacherId;
    console.log("here cours obj",this.cour);
 this.cService.addCourse(this.cour).subscribe(
   (resp)=>{console.log('here res from BE server',resp.isAdded);
     Swal.fire({
       position: "top-end",
       icon: "success",
        title: "Your course has been saved",
        showConfirmButton: false,
        timer: 1200
      });
     this.router.navigate(['teacherDashboard']);
   }

   );
  }

}
