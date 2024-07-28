import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.css']
})
export class TeacherInfoComponent implements OnInit {
T:any;
id:any;

  constructor(private activatedroute:ActivatedRoute,private tService:TeacherService,private uservice:UserService) { }
  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.params['id'];
    console.log(this.id);
    this.uservice.getUserById(this.id).subscribe(
      (data)=>{
        console.log("here user info",data.user);
        this.T=data.user;
      }
    )
  }
}
