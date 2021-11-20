import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { currencyFormater, ItemOrder, Order } from '../order-model';

@Component({
  selector: 'app-sidebar-cart',
  templateUrl: './sidebar-cart.component.html',
  styleUrls: ['./sidebar-cart.component.css']
})
export class SidebarCartComponent implements OnInit {
  @Input() order: Order;
  @Output() paymentEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  remove(order: ItemOrder): void {
    this.order.remove(order);
  }

  payment()
  {
    this.paymentEvent.emit();
  }
}
