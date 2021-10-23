import { Injectable } from '@angular/core';
import { Drink } from './drink.model';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  constructor(private http: HttpClient) {
  }
  readonly baseURL = `${environment.baseUrl}/api/Drink`;
  formData: Drink = new Drink();
  list: Drink[] = [];
  postDrink() {
    return this.http.post( this.baseURL ,this.formData);
  }
  putDrink() {
    return this.http.put(`${ this.baseURL }/${ this.formData.Id }`, this.formData);
  }
  deleteDrink(id: number) {
    return this.http.delete(`${ this.baseURL }/${ id }`);
  }
  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as Drink[]);
  }

}
