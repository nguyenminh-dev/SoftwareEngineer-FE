import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from '../cusomter-order/order-model';

@Component({
  selector: 'app-customer-payment',
  templateUrl: './customer-payment.component.html',
  styleUrls: ['./customer-payment.component.css']
})
export class CustomerPaymentComponent implements OnInit {
  constructor(private router: Router) {
    let state = this.router.getCurrentNavigation()?.extras.state;
    if (state)
      this.cart = state.cart;
  }
  cardForm = new FormGroup({
    firstName: new FormControl(''),
    phone: new FormControl(''),
    cardName: new FormControl(''),
    cardNum: new FormControl(''),
    exprMonth: new FormControl(''),
    exprYear: new FormControl(''),
    cvv: new FormControl(''),
  });
  cart: Order;
  ngOnInit(): void {
  }
  submit():void {
    window.alert("checkout\n"+JSON.stringify(this.cardForm.value)+"\n"+this.cart.priceStr);
  }
}
