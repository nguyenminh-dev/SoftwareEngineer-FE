import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Department } from './department.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }
  readonly baseURL = `${environment.baseUrl}/api/User`;
  formData: User = new User();
  list: User[] = [];
  DepartId: number;

  postUser() {
    
    return this.http.post( this.baseURL ,this.formData);
  }
  putUser() {
    return this.http.put(`${ this.baseURL }/${ this.formData.Id }`, this.formData);
  }
  deleteUser(id: string) {
    return this.http.delete(`${ this.baseURL }/${ id }`);
  }
  refreshList() {
    
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as User[]);
  }
  getDepartmentId(username:string) 
    {
      return this.http.get(`${ this.baseURL }/${ username }`)        
    }
}
