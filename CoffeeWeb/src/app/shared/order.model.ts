import { Drink } from '../shared/drink.model';

export class Order {
  Id: number;
  Quantity : number;
  Price: number;
  Status: string;
  CustomReq: string;
  Note: string;
  BillID: number;
  DrinkID: number;
  DrinkName: string;
  Total: number;

  constructor() {
    this.Id = 0;
    this.Quantity = 0;
    this.Price = 0;
    this.Status = "";
    this.CustomReq= "";
    this.Note="";
    this.BillID = 1;
  }
}



