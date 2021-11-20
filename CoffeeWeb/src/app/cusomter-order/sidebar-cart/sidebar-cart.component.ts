import { Component, Input, OnInit } from '@angular/core';
import { currencyFormater, ItemOrder } from '../order-model';

@Component({
  selector: 'app-sidebar-cart',
  templateUrl: './sidebar-cart.component.html',
  styleUrls: ['./sidebar-cart.component.css']
})
export class SidebarCartComponent implements OnInit {
  @Input() orders: ItemOrder[] = [];
  total:number = 0;
  public get totalStr()
  {
    return currencyFormater.format(this.total);
  }
  constructor() { }

  ngOnInit(): void {
    this.recalculateTotal();
  }

  remove(order: ItemOrder): void {
    this.orders.splice(this.orders.indexOf(order), 1);
  }

  recalculateTotal():void{
    this.total = 0;
    this.orders.forEach(order => {
      this.total += order.price;
    });
  }

  onValueChanged(order :ItemOrder):void {
    this.recalculateTotal();
  }
}
