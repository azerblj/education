import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teacherTab:any=[];

  constructor(private uservice:UserService) { }

  ngOnInit(): void {
    this.uservice.getAllusers("teacher").subscribe(
      (data)=>{console.log("here into data from BE",data.user);
        this.teacherTab=data.user;
      }
    );
  }
  isValidated(etat:any)
  {
    return etat=="V";

  }

}
