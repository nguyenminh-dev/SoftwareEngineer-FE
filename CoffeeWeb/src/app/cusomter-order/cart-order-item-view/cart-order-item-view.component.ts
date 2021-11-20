import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemOrder } from '../order-model';

@Component({
  selector: 'app-cart-order-item-view',
  templateUrl: './cart-order-item-view.component.html',
  styleUrls: ['./cart-order-item-view.component.css']
})
export class CartOrderItemViewComponent implements OnInit {
  @Input() item: ItemOrder;
  @Output() removeEvent = new EventEmitter<ItemOrder>();
  @Output() valueChanged = new EventEmitter<ItemOrder>();
  
  constructor() { }

  ngOnInit(): void {
  }

  decrease(): void {
    this.item.setAmount(this.item.amount - 1);
    if(this.item.amount <= 0)
      this.removeEvent.emit(this.item);
    this.valueChanged.emit(this.item);
  }

  increase(): void {
    this.item.setAmount(this.item.amount + 1);
    this.valueChanged.emit(this.item);
  }
}
