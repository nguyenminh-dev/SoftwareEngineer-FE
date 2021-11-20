import { Component, Input, OnInit } from '@angular/core';
import { currencyFormater, ItemOrder, Order } from '../order-model';

@Component({
  selector: 'app-sidebar-cart',
  templateUrl: './sidebar-cart.component.html',
  styleUrls: ['./sidebar-cart.component.css']
})
export class SidebarCartComponent implements OnInit {
  @Input() order: Order;
  constructor() { }

  ngOnInit(): void {
  }

  remove(order: ItemOrder): void {
    this.order.remove(order);
  }
}
