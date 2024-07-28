import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-adduniversity',
  templateUrl: './adduniversity.component.html',
  styleUrls: ['./adduniversity.component.css']
})
export class AdduniversityComponent implements OnInit {
  university:any={};
  universityForm!:FormGroup;

  constructor(private uService:UniversityService,private router:Router) { }

  ngOnInit(): void {
  }
  add()
  {
    this.uService.addUniversity(this.university).subscribe(
      (resp)=>{console.log("here responce from BE add university",resp.isAdded)
this.router.navigate(['Admin']);
      }
    )
  }

}
