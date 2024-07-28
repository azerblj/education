import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourService {
  courseUrl:string='http://localhost:3000/api/courses';

  constructor(private http:HttpClient) { }
  addCourse(course:any)
  {
     return this.http.post<{isAdded:any}>(this.courseUrl,course);
  }
  addGradesToStudent(course:any)
  {
     return this.http.post<{isAdded:any}>(this.courseUrl+"/grades",course);
  }

  editCourse(course:any)
  {
    return this.http.put<{isEdited:any}>(this.courseUrl,course);
  }

  deleteCourse(courseId:any)
  {
    return this.http.delete<{isDeleted : Boolean}>(`${this.courseUrl}/${courseId}`);
  }

  getCourseById(courseId:any)
  {
    return this.http.get<{cour:any}>(`${this.courseUrl}/${courseId}`);
  }
  getcoursesbyteacher(teacherId:any)
  {
    return this.http.get<{cour:any}>(this.courseUrl+"/find/"+teacherId);
  }
  getcoursesbystudent(teacherId:any)
  {
    return this.http.get<{cour:any}>(this.courseUrl+"/findstudent/"+teacherId);
  }
  getAllCoursees()
  {
    return this.http.get<{ cours:any }>(this.courseUrl);
  }


}
