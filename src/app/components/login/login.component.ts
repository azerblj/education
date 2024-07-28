import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  lg:any={};
  msg:string='';
  logine()
  {
    console.log("this is login form",this.lg);
    this.uService.login(this.loginForm.value).subscribe(
      (resp)=>{
        console.log("here rsp login from BE",resp);
        if (resp.user) {
          sessionStorage.setItem('jwt',resp.user);
          //decodage token
          let decoded:any = jwtDecode(resp.user);
          console.log("here decoded token",decoded);
           if (decoded.role=='admin') {
          this.router.navigate(['Admin']);


        }
        else if(decoded.role=='teacher')
        {
          if (decoded.etat=='NV') {
            Swal.fire({
              icon: "error",
              title: "LOGIN Error",
              text: "Account is not Activated yet",

            });
            sessionStorage.removeItem('jwt');

          } else {
            this.router.navigate(['teacherDashboard']);

          }
        }
        else if(decoded.role=='student')
        {
          this.router.navigate(['studentDashboard']);
        }


        else if(decoded.role=='parent') {
          this.router.navigate(['']);

        }


        }

        else {
          this.msg="Check phone Number or Password";
          Swal.fire({
            icon: "error",
            title: "LOGIN Error",
            text: "Check phone Number or Password",

          });


        }


      }
    )
  }

  constructor(private formbuilder:FormBuilder,private uService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formbuilder.group(
      { tel: ['',[Validators.required,Validators.pattern('[0-9 ]{8}')]],
        pwd: ['',[Validators.required]] }
    )
  }

}
