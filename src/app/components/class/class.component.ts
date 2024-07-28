import { Component, OnInit } from '@angular/core';
import { CourService } from 'src/app/services/cour.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  courTab:any;


  constructor(private cService:CourService,private uService:UserService) { }

  ngOnInit(): void {
    this.cService.getAllCoursees().subscribe(
      (data)=>{this.courTab=data.cours;
        console.log(data.cours);
      }
    )



  }


}
