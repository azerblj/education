import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl:string='http://localhost:3000/api/users';

  constructor(private http:HttpClient) { }

  signup(obj:any,photo:any)
  {
    let fData = new FormData();
    fData.append("firstName",obj.firstName);
    fData.append("lastName",obj.lastName);
    fData.append("email",obj.email);
    fData.append("pwd",obj.pwd);
    fData.append("role",obj.role);
    fData.append("tel",obj.tel);
    fData.append("adr",obj.adr);
    if(obj.role=='parent')
    {
      fData.append("kidtel",obj.kidtel);
    }
    else if(obj.role=='student')
    {
      fData.append("img",photo);
    }
    else if(obj.role=='teacher')
      {
        fData.append("img",photo);
        fData.append("speciality",obj.speciality);
        fData.append("etat",obj.etat);

      }
      console.log(fData);

    return this.http.post<{ isAdded:boolean }>(this.userUrl + '/signup',fData);
  }
  login(obj:any)
  {
    return this.http.post<{ msg:String,user:any}>(this.userUrl + '/login' ,obj);
  }
  searchKidNumber(obj:any)
  {
    return this.http.post<{ kid:any }>(this.userUrl + "/search" ,obj);
  }
  getAllusers(role:any)
  {
    return this.http.get<{ user:any }>(`${this.userUrl}/${role}`);
  }
  deleteuser(userid:any)
  {
    return this.http.delete<{isDeleted : Boolean}>(`${this.userUrl}/${userid}`);
  }
  editTeacher(teacher:any)
  {
    return this.http.put<{isEdited:boolean}>(this.userUrl,teacher);
  }
  addCourToStudent(obj:any)
  {
    return this.http.put<{isEdited:any}>(this.userUrl+"/add",obj);
  }
  getUserById(id:any)
  {
    return this.http.get<{user:any}>(this.userUrl +"/info/"+id);
  }
  getUserBytel(tel:any)
  {
    return this.http.get<{user:any}>(this.userUrl +"/findtel/"+tel);
  }
  getGrade(obj:any)
  {
    return this.http.post<{cour:any}>(this.userUrl +"/grade",obj);
  }

}
