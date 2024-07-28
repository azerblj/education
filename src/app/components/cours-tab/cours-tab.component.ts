import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { CourService } from 'src/app/services/cour.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cours-tab',
  templateUrl: './cours-tab.component.html',
  styleUrls: ['./cours-tab.component.css']
})
export class CoursTabComponent implements OnInit {
  T:any=[];
  id:any;
  path:any;
  decoded:any;
  teacherId:any;
  Id:any;
  tel:any;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private cService:CourService,private uService:UserService) { }

  ngOnInit(): void {
    this.path=this.router.url;
    this.tel=this.activatedRoute.snapshot.params['tel'];
    if (this.path=="/teacherDashboard") {
      let token:any =sessionStorage.getItem('jwt');
      if (token) {
        this.decoded=jwtDecode(token);
        this.teacherId=this.decoded.id;
        console.log("here teacher id",this.teacherId);
      this.uService.getUserById(this.teacherId).subscribe(
        (data)=>{
          console.log(data.user.coures);
          this.T=data.user.coures;


        }

      )

    }


    }
    else if (this.path=="/studentDashboard") {
      let token:any =sessionStorage.getItem('jwt');
      if (token) {
        this.decoded=jwtDecode(token);
        this.teacherId=this.decoded.id;
        console.log("here student id",this.teacherId);
        this.uService.getUserById(this.teacherId).subscribe(
          (data)=>{
            this.T=data.user.coursStudent;
            console.log("here data",data.user.coursStudent)

          }
        )

    }


    }
    else if(this.path=="/courTab/parentDashboard/"+this.tel)
    {
      console.log(this.tel);
      this.uService.getUserBytel(this.tel).subscribe(
        (data)=>{
          this.T=data.user.coursStudent;
          console.log("here data",data.user)

        }
      )

    }


else{

  this.id=this.activatedRoute.snapshot.params['id'];
  this.cService.getAllCoursees().subscribe(
    (data)=>{
      console.log(data.cours)
      this.T=data.cours;}
  )}




  }
  goToInfo(id:number)
  {
    this.router.navigate([`coursInfo/${id}`]);
  }
  goToEdit(id:number)
  {
    this.router.navigate([`editCour/${id}`]);

  }
  delet(id:number)
  {Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      this.cService.deleteCourse(id).subscribe(
        (responce)=>{
          console.log('here delete response',responce.isDeleted);
          if(responce.isDeleted)
            {
              this.cService.getAllCoursees().subscribe(
                (data)=>{this.T=data.cours;

                }
              )
            }
        }
      );
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });





  }
  isteacher()
  {

    return this.path=="/teacherDashboard";
  }
  isstudent()
  {

    return this.path=="/studentDashboard";
  }
  isParent()
  {

    return this.path=="/courTab/parentDashboard/"+this.tel;
  }
isemppty(note:any)
{
  if(note==null)
  {
    return true;
  }
  else
  return false;
}

}
