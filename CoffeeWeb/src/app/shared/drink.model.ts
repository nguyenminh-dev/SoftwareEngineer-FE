import { Category } from '../shared/category.model';

export class Drink {
  Id: number;
  Name: string;
  CategoryID: number;
  CategoryName: string;
  Price: number;
  Available : boolean;



  constructor() {
    this.Id = 0;
    this.Name = "";
    this.Price = 0;
    this.Available = false;
  }
}

