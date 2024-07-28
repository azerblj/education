import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  universityUrl:string='http://localhost:3000/api/universitys';

  constructor(private http:HttpClient) { }
  addUniversity(university:any)
  {
     return this.http.post<{isAdded:any}>(this.universityUrl,university);
  }

  editUniversity(university:any)
  {
    return this.http.put<{isEdited:any}>(this.universityUrl,university);
  }

  deleteUniversity(universityId:any)
  {
    return this.http.delete<{isDeleted : Boolean}>(`${this.universityUrl}/${universityId}`);
  }

  getUniversityById(universityId:any)
  {
    return this.http.get<{university:any}>(`${this.universityUrl}/${universityId}`);
  }

  getAllUniversitys()
  {
    return this.http.get<{ universitys:any }>(this.universityUrl);
  }

}
