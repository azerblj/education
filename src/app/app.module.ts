import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { AboutComponent } from './components/about/about.component';
import { ClassComponent } from './components/class/class.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { BlogComponent } from './components/blog/blog.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { InfoComponent } from './components/info/info.component';
import { CoursComponent } from './components/cours/cours.component';
import { FaciComponent } from './components/faci/faci.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { AdminComponent } from './components/admin/admin.component';
import { TeacherTabComponent } from './components/teacher-tab/teacher-tab.component';
import { CoursTabComponent } from './components/cours-tab/cours-tab.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchcourseComponent } from './components/searchcourse/searchcourse.component';
import { UniversitiesComponent } from './components/universities/universities.component';
import { UniversityComponent } from './components/university/university.component';
import { EditTeacherComponent } from './components/edit-teacher/edit-teacher.component';
import { TeacherInfoComponent } from './components/teacher-info/teacher-info.component';
import { CoursinfoComponent } from './components/coursinfo/coursinfo.component';
import { EditCourComponent } from './components/edit-cour/edit-cour.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



import { UniversityinfoComponent } from './components/universityinfo/universityinfo.component';
import { EdituniversityComponent } from './components/edituniversity/edituniversity.component';
import { AdduniversityComponent } from './components/adduniversity/adduniversity.component';
import { StudentTabComponent } from './components/student-tab/student-tab.component';
import { StudentInfoComponent } from './components/student-info/student-info.component';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { ParentDashboardComponent } from './components/parent-dashboard/parent-dashboard.component';
import { GradesTabComponent } from './components/grades-tab/grades-tab.component';
import { ParentTabComponent } from './components/parent-tab/parent-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacilitiesComponent,
    AboutComponent,
    ClassComponent,
    RegistrationComponent,
    TeamComponent,
    TestimonialComponent,
    BlogComponent,
    TeacherComponent,
    InfoComponent,
    CoursComponent,
    FaciComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AddCourseComponent,
    AddTeacherComponent,
    AdminComponent,
    TeacherTabComponent,
    CoursTabComponent,
    SearchcourseComponent,
    UniversitiesComponent,
    UniversityComponent,
    EditTeacherComponent,
    TeacherInfoComponent,
    CoursinfoComponent,
    EditCourComponent,

    UniversityinfoComponent,
    EdituniversityComponent,
    AdduniversityComponent,
    StudentTabComponent,
    StudentInfoComponent,
    TeacherDashboardComponent,
    StudentDashboardComponent,
    ParentDashboardComponent,
    GradesTabComponent,
    ParentTabComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
