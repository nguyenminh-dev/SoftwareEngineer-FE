import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { BillService } from '../shared/bill.service';
import { DepartmentService } from '../shared/department.service';
import { Order } from '../shared/order.model';
import { Bill } from '../shared/bill.model';
import { OrderService } from '../shared/order.service';
import { BartenderFormComponent } from './bartender-form/bartender-form.component';

@Component({
  selector: 'app-batender',
  templateUrl: './batender.component.html',
  styles: [
  ]
})
export class BatenderComponent implements OnInit {

  constructor(private toastr: ToastrService,
    public departmentService: DepartmentService,
    public billService: BillService,
    private modalService: NgbModal,
    public orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router) { }
  billstate: any[]= [
    {Id: 1, state:"Chưa làm"},
    {Id: 2, state:"Đang làm"},
    {Id: 3, state:"Đã xong"}];
  
  ngOnInit(): void {
    this.departmentService.refreshList(),
    this.billService.refreshList()
    
  }

  onOrder(selectedRecord: Order){
    this.orderService.formData = Object.assign({}, selectedRecord);
    this.modalService.open(BartenderFormComponent);
  }
  changeState(statenum:number, bill: Bill)
  {
    this.billService.formData=bill
    
    if (confirm('Xác nhận thay đổi trạng thái đơn hàng sang: '+ this.billstate[statenum-1].state+ "?")) 
    {
      debugger;
      this.billService.formData.OrderList.forEach(
        x => x.Status = this.billstate[statenum - 1].state
      );
      console.log(this.billService.formData);
      this.billService.putBill()
        .subscribe(
          res => {
            this.billService.refreshList();
            this.toastr.success("Đã thay đổi trạng thái",
            
            );
          },
          err => { console.log(err) }
        )
    }
  }
}
