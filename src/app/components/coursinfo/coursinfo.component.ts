import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourService } from 'src/app/services/cour.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-coursinfo',
  templateUrl: './coursinfo.component.html',
  styleUrls: ['./coursinfo.component.css']
})
export class CoursinfoComponent implements OnInit {
  coursTab:any={};
  id:any;

  constructor(private cService:CourService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.cService.getCourseById(this.id).subscribe(
      (data)=>{
        console.log("here cour info from BE ",data.cour);
        this.coursTab=data.cour;
      }
    )
  }

}
