import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  teacher:any={}
  teacherForm!:FormGroup;
  constructor(private tService:TeacherService,private router:Router) { }

  ngOnInit(): void {
  }
  add()
  {
   this.tService.addTeacher(this.teacher).subscribe(
    (resp)=>{console.log("here responce add teacher from BE",resp.isAdded);
      this.router.navigate(['Admin']);
    }
   )
  }

}
