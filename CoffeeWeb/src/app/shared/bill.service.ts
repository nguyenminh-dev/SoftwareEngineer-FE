import { Injectable } from '@angular/core';
import { Bill } from './bill.model';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Drink } from './drink.model';
import { OrderService } from './order.service';
import { NgForm } from '@angular/forms';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  constructor(private http: HttpClient, private orderService: OrderService) {
  }
  readonly baseURL = `${environment.baseUrl}/api/Bill`;
  formData: Bill = new Bill();
  list: Bill[] = [];

  postBill(form :NgForm, ordlist: Order[]) {
    this.formData.OrderList = ordlist;
    var body ={
      ...this.formData,
      OrderList: this.formData.OrderList
    }
    console.log(body);
    return this.http.post( this.baseURL, body);
  }
  putBill() {
    return this.http.put(`${this.baseURL}/${ this.formData.Id }`, this.formData);
  }
  doneBill(id:number)
  {
    
    this.formData.DateCheckIn="";
    return this.http.put(`${this.baseURL}/${id}`,this.formData);
  }
  deleteBill(id: number) {
    return this.http.delete(`${ this.baseURL }/${ id }`);
  }
  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as Bill[]);
  }
  
}




