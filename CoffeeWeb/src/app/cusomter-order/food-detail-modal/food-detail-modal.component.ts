import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from '../order-model';

@Component({
  selector: 'app-food-detail-modal',
  templateUrl: './food-detail-modal.component.html',
  styleUrls: ['./food-detail-modal.component.css']
})
export class FoodDetailModalComponent implements OnInit {
  @Input() item: Food;
  @Output() dismissEvent = new EventEmitter();
  @Output() addToCartEvent = new EventEmitter<Food>();
  constructor() { }

  ngOnInit(): void {
  }

  dismiss(){
    console.log("dismiss");
    this.dismissEvent.emit();
  }

  addToCart()
  {
    this.addToCartEvent.emit(this.item);
  }
}
