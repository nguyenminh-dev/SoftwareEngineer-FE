import { Component, OnInit } from '@angular/core';
import { CustomerOrderService } from '../customer-order.service';
import { Category, Food, ItemOrder, Order } from '../order-model';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
  currentCategory: Category[] = [];
  currentSelected: Food|null;
  currentCart: Order = new Order();

  constructor(private customerOrderService: CustomerOrderService) {
    customerOrderService.GetMenu().subscribe(menu => this.currentCategory = menu);
  }

  ngOnInit(): void {
  }

  search(searchStr: string)
  {
    console.log(`search ${searchStr}`);
    this.customerOrderService.GetMenuWithFilter(searchStr).subscribe(menu => this.currentCategory = menu);
  }

  onFoodSelect(food: Food): void {
    console.log(food);
    this.currentSelected = food;
  }

  onDismiss(): void {
    this.currentSelected = null;
  }

  onAddToCart(food: Food): void {
    let cartItem:ItemOrder|undefined = this.currentCart.items.find(cartItem => cartItem.food.id == food.id);
    if(cartItem == undefined) {
      cartItem = new ItemOrder(food, 0);
      this.currentCart.addItem(cartItem);
    }
    cartItem.setAmount(cartItem.amount + 1);
    console.log(cartItem);
  }
}
