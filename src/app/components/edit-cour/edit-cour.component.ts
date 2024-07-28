import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourService } from 'src/app/services/cour.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-cour',
  templateUrl: './edit-cour.component.html',
  styleUrls: ['./edit-cour.component.css']
})
export class EditCourComponent implements OnInit {



  constructor(private cService:CourService,private router:Router,private activatedRoute:ActivatedRoute) { }
  courForm!:FormGroup;
  cour:any={};
  id:any;
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.cService.getCourseById(this.id).subscribe(
      (data)=>{
       this.cour = data.cour;}
    );
  }
  edit()
  {
    console.log("here match obj",this.cour);



  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then((result) => {

    if (result.isConfirmed) {
      this.cService.editCourse(this.cour).subscribe(
        (resp)=>{console.log('here edit resp from BE ',resp.isEdited);


        }
      );
      Swal.fire("Saved!", "", "success");
      this.router.navigate(['teacherDashboard']);


    } else if (result.isDenied) {
      Swal.fire("Changes are not saved","", "info");
    }
  });
  }

}
