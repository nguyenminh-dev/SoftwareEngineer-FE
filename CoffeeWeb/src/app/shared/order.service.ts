import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Drink } from './drink.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {
  }
  readonly baseURL = `${environment.baseUrl}/api/Order`;
//   formData: Order = new Order();
  list: Order[] = [];
  formData: Order = new Order();
  index: number;

}
