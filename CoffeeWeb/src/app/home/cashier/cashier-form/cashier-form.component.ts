import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BillService } from 'src/app/shared/bill.service';
import { Order } from "src/app/shared/order.model";
@Component({
  selector: 'app-cashier-form',
  templateUrl: './cashier-form.component.html',
  styleUrls: ['./cashier-form.component.css']
})
export class CashierFormComponent implements OnInit {

  constructor( private toastr: ToastrService,
    private route: ActivatedRoute, 
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private router: Router,
    public Bservice: BillService,
     ) { }
  BillPrice: number;
  
  ngOnInit(): void {
    this.BillPrice =this.Bservice.formData.TotalPrice
  }
  
  Discount(event:any)
  {
    this.BillPrice =this.Bservice.formData.TotalPrice-  event.target.value;
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

}
