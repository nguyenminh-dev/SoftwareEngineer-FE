import { Order } from "./order.model";

export class Bill {
    Id: number;
    TableId: number;
    TableName: string;
    DateCheckIn: string;
    tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    localISOTime = (new Date(Date.now() - this.tzoffset)).toISOString().slice(0, -1)
    TotalPrice: number;
    OrderList: Order[];
    constructor() {
        this.Id = 0;
        this.TotalPrice = 0.0;
        this.DateCheckIn = this.localISOTime;

      }
}
