import { Injectable } from '@angular/core';
import { Table } from './table.model';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor(private http: HttpClient) {
  }
  readonly baseURL = `${environment.baseUrl}/api/Table`;
  formData: Table = new Table();
  list: Table[] = [];
  postTable() {
    return this.http.post(this.baseURL,"");
  }
  putTable(id:number) {
    return this.http.put(`${ this.baseURL }/${id}`, "");
  }
  deleteTable() {
    return this.http.delete(this.baseURL);
  }
  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as Table[]);
  }

}