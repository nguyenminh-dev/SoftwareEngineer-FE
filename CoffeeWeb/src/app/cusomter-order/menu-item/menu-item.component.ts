import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from '../order-model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item: Food;
  @Output() foodClick = new EventEmitter<Food>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.foodClick.emit(this.item);
  }
}
