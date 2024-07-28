import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm!:FormGroup;

  path:any;
  userToSend:any;
  msg:any="";
  kid:any;
  imagePreview:any;
  selectedFile:any;

  constructor(private formBuilder:FormBuilder,private uService:UserService,private router:Router) { }

  ngOnInit(): void {

    this.signupForm=this.formBuilder.group(
      { email: ['',[Validators.required,Validators.email]],
        pwd: ['',[Validators.required]],
        firstName:['',[Validators.required]],
        lastName:['',[Validators.required]],
        speciality:['',[Validators.required]],
        tel:['',[Validators.required,Validators.pattern('[0-9 ]{8}')]],
        kidtel:['',[Validators.required,Validators.pattern('[0-9 ]{8}')]],
        adr:['']
       }
    )
    this.path=this.router.url;

  }
  isTeacher()
{
   return this.path == '/signupTeacher';
}
isStudent()
{
   return this.path == '/signupStudent';
}
isParent()
{
   return this.path == '/signupParent';
}
  add()
  {
    if (this.path == '/signupTeacher') {
      this.signupForm.value.role = 'teacher';
      this.signupForm.value.etat = 'NV';

    }
    else if(this.path == '/signupStudent') {
      this.signupForm.value.role = 'student';
    }
    else if (this.path == '/signupParent') {
      this.signupForm.value.role = 'parent';

    }
    else {
      this.signupForm.value.role = 'admin';
    }

    console.log("here signupForm",this.signupForm.value);
    if(this.path == '/signupTeacher')
    {
    this.userToSend ={
      role:this.signupForm.value.role,
      etat:this.signupForm.value.etat,
      firstName:this.signupForm.value.firstName,
      lastName:this.signupForm.value.lastName,
      email:this.signupForm.value.email,
      tel:this.signupForm.value.tel,
      adr:this.signupForm.value.adr,
      speciality:this.signupForm.value.speciality,
      pwd:this.signupForm.value.pwd
    };
  }
   else if(this.path == '/signupParent')
    {
      this.userToSend ={
        role:this.signupForm.value.role,
        firstName:this.signupForm.value.firstName,
        lastName:this.signupForm.value.lastName,
        email:this.signupForm.value.email,
        tel:this.signupForm.value.tel,
        kidtel:this.signupForm.value.kidtel,
        adr:this.signupForm.value.adr,
        pwd:this.signupForm.value.pwd

      };
      this.uService.searchKidNumber(this.signupForm.value).subscribe(
        (data)=>{console.log("here kidtel verification",data.kid);
          this.kid=data.kid;

        }
      )
    }
    else {
      this.userToSend ={
        role:this.signupForm.value.role,
        firstName:this.signupForm.value.firstName,
        lastName:this.signupForm.value.lastName,
        email:this.signupForm.value.email,
        tel:this.signupForm.value.tel,
        adr:this.signupForm.value.adr,
        pwd:this.signupForm.value.pwd

      };

    }
    console.log(this.userToSend);
if(this.isParent()==false||(this.isParent()&&this.kid))
  {
    this.uService.signup(this.userToSend,this.selectedFile).subscribe(
      (resp)=>{
        if (resp.isAdded) {
          console.log("succes");
          Swal.fire({
            title: "Welcome",
            text: "Your account has been Added.",
            icon: "success"
          });
          this.router.navigate(['login']);
        } else {
          console.log("user already exists");
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Phone number already Used",

          });


        }

     }
    );


  }
  else
  { Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Check Your Kid's Number",

  });}
  }
  onImageSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length
    > 0) {
    const file = inputElement.files[0];
    this.selectedFile=file;

    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
    }
    }

}
