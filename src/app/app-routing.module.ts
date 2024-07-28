import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { ClassComponent } from './components/class/class.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { SearchcourseComponent } from './components/searchcourse/searchcourse.component';
import { UniversitiesComponent } from './components/universities/universities.component';
import { EditTeacherComponent } from './components/edit-teacher/edit-teacher.component';
import { TeacherInfoComponent } from './components/teacher-info/teacher-info.component';
import { AdminComponent } from './components/admin/admin.component';
import { CoursinfoComponent } from './components/coursinfo/coursinfo.component';
import { EditCourComponent } from './components/edit-cour/edit-cour.component';
import { AdduniversityComponent } from './components/adduniversity/adduniversity.component';
import { StudentInfoComponent } from './components/student-info/student-info.component';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { ParentDashboardComponent } from './components/parent-dashboard/parent-dashboard.component';
import { CoursTabComponent } from './components/cours-tab/cours-tab.component';
import { ParentTabComponent } from './components/parent-tab/parent-tab.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'team',component:TeamComponent},
  {path:'class',component:ClassComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'signupAdmin',component:SignupComponent},
  {path:'signupTeacher',component:SignupComponent},
  {path:'signupStudent',component:SignupComponent},
  {path:'signupParent',component:SignupComponent},
  {path:'teacherDashboard/add-course',component:AddCourseComponent},
  {path:'add-teacher',component:AddTeacherComponent},
  {path:'add-university',component:AdduniversityComponent},
  {path:'Admin',component:AdminComponent},
  {path:'teacherDashboard',component:TeacherDashboardComponent},
  {path:'studentDashboard',component:StudentDashboardComponent},
  {path:'parentDashboard',component:ParentDashboardComponent},
  {path:'searchCourses',component:SearchcourseComponent},
  {path:'universities',component:UniversitiesComponent},
  {path:'editTeacher/:id',component:EditTeacherComponent},
  {path:'teacherInfo/:id',component:TeacherInfoComponent},
  {path:'studentInfo/:id',component:StudentInfoComponent},
  {path:'coursInfo/:id',component:CoursinfoComponent},
  {path:'editCour/:id',component:EditCourComponent},
  {path:'courTab/parentDashboard/:tel',component:CoursTabComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
