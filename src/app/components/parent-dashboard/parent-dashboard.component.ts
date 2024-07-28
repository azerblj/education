import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-parent-dashboard',
  templateUrl: './parent-dashboard.component.html',
  styleUrls: ['./parent-dashboard.component.css']
})
export class ParentDashboardComponent implements OnInit {
kid:any={};
parentForm!:FormGroup;

  constructor(private uService:UserService,private router:Router,private formBuilder:FormBuilder ) { }


  ngOnInit(): void {
    this.parentForm=this.formBuilder.group(
      {

        tel:['',[Validators.required,Validators.pattern('[0-9 ]{8}')]],

       }
    )
  }
  search()
  {
console.log("here kid tel",this.parentForm.value.tel);
this.uService.getUserBytel(this.parentForm.value.tel).subscribe(
  (data)=>{console.log(data.user);
    if(data.user)
    {
      let tel=this.parentForm.value.tel;
      this.router.navigate([`courTab/parentDashboard/${tel}`]);
    }
    else
    {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Check your kid's number",

      });
      console.log("check your kid's number");
    }
  }
)

  }

}
