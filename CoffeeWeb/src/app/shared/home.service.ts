import { Injectable } from '@angular/core';
import {User} from './user.model';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {
  }
  readonly baseURL = `${environment.baseUrl}/api/Home`;
  getDepartId(username:string):Observable<any>
    {
      return this.http.get(`${ this.baseURL }/${sessionStorage.getItem('username')}`);
           
    }

    
}