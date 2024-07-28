import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';



@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  teacherForm!:any;
  id:any;
  T:any={};

  constructor( private activatedroute :ActivatedRoute,private tService:TeacherService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.params['id'];
    this.tService.getTeacherById(this.id).subscribe(
      (data)=>{
        this.T=data.teacher;
      }
    )
  }
  edit()
  {
console.log("here teacher info from BE",this.T);
this.tService.editTeacher(this.T).subscribe(
  (resp)=>{
    console.log("here into resp from BE",resp.isEdited);
    this.router.navigate(['Admin']);
  }
);
  }

}
