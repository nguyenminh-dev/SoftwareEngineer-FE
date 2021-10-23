import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CashierFormComponent} from './cashier-form/cashier-form.component';
import { BillService } from 'src/app/shared/bill.service';
import {Bill} from 'src/app/shared/bill.model';
import { Order } from "src/app/shared/order.model";

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {

  constructor(private toastr: ToastrService,
    public Bservice: BillService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal) { }
  tbName: string
  // Orders: Order[]=
  // [ {Id: 1,
  //    DrinkName: 'Coffee', 
  //    Quantity:1,
  //    Status:'aaa',
  //    Note:'',
  //    CustomReq:'',
  //    BillID:1,
  //    DrinkID:1,
  //    Price: 30000,
  //   Total: 22222,}]
  // Bills:Bill[]
  // =[
  //   {
  //     Id: 5,
  //     TableId: 5,
  //     TableName: 'Bàn số 5',
  //     DateCheckIn: "0000",
  //     TotalPrice: 20000,
  //     OrderList: this.Orders,
  //   },
  //   {
  //     Id: 1,
  //     TableId: 1,
  //     TableName: 'Bàn số 1',
  //     DateCheckIn: "0000",
  //     TotalPrice: 20000,
  //     OrderList: this.Orders,
  //   },
  //   {
  //     Id: 4,
  //     TableId: 4,
  //     TableName: 'Bàn số 4',
  //     DateCheckIn: "0000",
  //     TotalPrice: 20000,
  //     OrderList: this.Orders,
  //   },
  //   {
  //     Id: 3,
  //     TableId: 3,
  //     TableName: 'Bàn số 3',
  //     DateCheckIn: "0000",
  //     TotalPrice: 20000,
  //     OrderList: this.Orders,
  //   },
  //   {
  //     Id: 2,
  //     TableId: 2,
  //     TableName: 'Bàn số 2',
  //     DateCheckIn: "0000",
  //     TotalPrice: 20000,
  //     OrderList: this.Orders,
  //   }
  // ]
  ngOnInit(): void {
    this.Bservice.refreshList()
  }
  Complete(Id:number):void
  {
    if (confirm('Xác nhận thanh toán hóa đơn?')) {
      this.Bservice.doneBill(Id)
        .subscribe(
          res => {
            this.Bservice.refreshList();
            this.toastr.success("Đã xác nhận thanh toán",
            
            );
          },
          err => { console.log(err) }
        )
    }
  }
  checkstate(orderList: Order[])
  {
    for(var ls of orderList)
    {
      if(ls.Status!="Đã xong") return false;
    }
    
    return true;
  }
  populateForm(selectedRecord: Bill) {
    this.Bservice.formData = Object.assign({}, selectedRecord);
    this.modalService.open(CashierFormComponent);
  }
}
