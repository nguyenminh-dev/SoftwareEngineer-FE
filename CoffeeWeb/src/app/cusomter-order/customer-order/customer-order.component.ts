import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  hardCodeData: boolean;
  constructor(
    private activatedroute: ActivatedRoute,
    private customerOrderService: CustomerOrderService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.activatedroute.data.subscribe(data => {
      this.hardCodeData = data?.hardcode_data??false;
      console.log(this.hardCodeData);
      this.customerOrderService.GetMenu(this.hardCodeData).subscribe(menu => this.currentCategory = menu);
    })
  }

  search(searchStr: string)
  {
    console.log(`search ${searchStr}`);
    this.customerOrderService.GetMenuWithFilter(this.hardCodeData, searchStr).subscribe(menu => this.currentCategory = menu);
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

  onPaymentEvent(): void
  {
    console.log("pay");
    this.router.navigate(['/payment'], {state: {cart: this.currentCart}});
  }
}
