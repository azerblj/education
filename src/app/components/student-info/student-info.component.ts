import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  T:any=[];
  id:any;

  constructor(private uService:UserService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.uService.getUserById(this.id).subscribe(
      (data)=>{
        console.log(data.user);
        this.T=data.user;
      }
    )
  }

}
