import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category, Food } from '../order-model';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {
  @Input() categories: Category[];
  @Output() foodItemClickEvent = new EventEmitter<Food>();
  constructor() { }

  ngOnInit(): void {
  }

  onFoodClick(food: Food): void {
    this.foodItemClickEvent.emit(food);
  }
}
