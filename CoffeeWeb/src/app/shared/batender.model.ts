export class Batender {
  Id: number;
  Quantity : number;
  Price: number;
  Status: string;
  CustomReq: string;
  Note: string;
  DrinkID: number;
  DrinkName: string;
  TableID: number;
  TableName: string;
  Total: number;

  constructor() {
    this.Id = 0;
    this.Quantity = 0;
    this.Price = 0;
    this.Status = "";
    this.CustomReq= "";
    this.Note="";
  }
}
