import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teacherUrl:string='http://localhost:3000/api/teachers';

  constructor(private http:HttpClient) { }
  addTeacher(teacher:any)
  {
     return this.http.post<{isAdded:any}>(this.teacherUrl,teacher);
  }

  editTeacher(teacher:any)
  {
    return this.http.put<{isEdited:any}>(this.teacherUrl,teacher);
  }

  deleteTeacher(teacherId:any)
  {
    return this.http.delete<{isDeleted : Boolean}>(`${this.teacherUrl}/${teacherId}`);
  }

  getTeacherById(teacherId:any)
  {
    return this.http.get<{teacher:any}>(`${this.teacherUrl}/${teacherId}`);
  }

  getAllTeacheres()
  {
    return this.http.get<{ teachers:any }>(this.teacherUrl);
  }


}
