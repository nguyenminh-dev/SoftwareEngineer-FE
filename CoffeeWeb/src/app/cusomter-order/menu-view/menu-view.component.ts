import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from '../order-model';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent implements OnInit {
  @Input() menuItems: Food[] = [];
  @Output() foodClickEvent= new EventEmitter<Food>();
  constructor() { }

  ngOnInit(): void {
  }

  foodClick(food: Food): void {
    this.foodClickEvent.emit(food);
  }
}
