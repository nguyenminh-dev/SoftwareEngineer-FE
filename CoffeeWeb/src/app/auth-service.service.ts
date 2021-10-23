import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http:HttpClient) { }
  readonly baseURL = `${environment.baseUrl}/api/Authentication/login`;
  login(data:any):Observable<any>{
    return this.http.post(this.baseURL , data);
    
  }
}
