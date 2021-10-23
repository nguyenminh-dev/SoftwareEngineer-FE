import { Injectable } from '@angular/core';
import { Department } from './department.model';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private http: HttpClient) {
  }
  readonly baseURL = `${environment.baseUrl}/api/Department`;
  formData: Department = new Department();
  list: Department[] = [];
  postDepartment() {
    return this.http.post( this.baseURL ,this.formData);
  }
  putDepartment() {
    return this.http.put(`${ this.baseURL }/${ this.formData.Id }`, this.formData);
  }
  deleteDepartment(id: number) {
    return this.http.delete(`${ this.baseURL }/${ id }`);
  }
  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as Department[]);
  }
  
}
