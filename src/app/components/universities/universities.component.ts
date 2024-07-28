import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent implements OnInit {
  universitytab:any=
  [
  ]
  constructor(private uService:UniversityService) { }

  ngOnInit(): void {
this.uService.getAllUniversitys().subscribe(
  (data)=>{this.universitytab=data.universitys;}
)
  }

}
