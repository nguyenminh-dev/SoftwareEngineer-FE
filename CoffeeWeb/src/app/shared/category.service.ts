import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {
  }
  readonly baseURL = `${environment.baseUrl}/api/Category`;
  formData: Category = new Category();
  list: Category[] = [];
  postCategory() {
    return this.http.post( this.baseURL ,this.formData);
  }
  putCategory() {
    return this.http.put(`${ this.baseURL }/${ this.formData.Id }`, this.formData);
  }
  deleteCategory(id: number) {
    return this.http.delete(`${ this.baseURL }/${ id }`);
  }
  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as Category[]);
  }

}
