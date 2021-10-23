import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BillService } from 'src/app/shared/bill.service';
import { DepartmentService } from 'src/app/shared/department.service';
import { Order } from 'src/app/shared/order.model';
import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-bartender-form',
  templateUrl: './bartender-form.component.html',
  styles: [
  ]
})
export class BartenderFormComponent implements OnInit {

  constructor(private toastr: ToastrService,
    public departmentService: DepartmentService,
    public billService: BillService,
    private modalService: NgbModal,
    public orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.departmentService.refreshList(),
    this.billService.refreshList()
  }
  onOrder(selectedRecord: Order){
    this.orderService.formData = Object.assign({}, selectedRecord);
    this.modalService.open(BartenderFormComponent);
  }

}
