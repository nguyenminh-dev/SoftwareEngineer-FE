import { Component, OnInit } from '@angular/core';
import { Drink } from '../shared/drink.model';
import { DrinkService } from '../shared/drink.service';
import { CategoryService } from '../shared/category.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { OrderService } from '../shared/order.service';
import { NgForm } from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { OrderFormComponent } from './order-form/order-form.component'
import { OrderUpdateComponent } from './order-update/order-update.component'
import { Order } from '../shared/order.model';
import { BillService } from '../shared/bill.service';
import { TableService } from '../shared/table.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  constructor(public service: DrinkService,
    public categoryservice: CategoryService,
    public orderservice: OrderService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    public billservice: BillService,
    public tableservice: TableService,
    private route: ActivatedRoute, private router: Router) { }
    search: string
  ngOnInit(): void {
    this.service.refreshList();
    this.categoryservice.refreshList();
    this.tableservice.refreshList();
    this.resetForm();
  }
  populateForm(selectedRecord: Drink) {
    this.service.formData = Object.assign({}, selectedRecord);
    this.orderservice.formData = {
      Id: 0,
      BillID: this.billservice.formData.Id,
      Quantity : 1,
      Price: this.service.formData.Price,
      Status: 'Chưa làm',
      CustomReq: '',
      Note: '',
      DrinkID: this.service.formData.Id,
      DrinkName: this.service.formData.Name,
      Total: 0
    }
    this.modalService.open(OrderFormComponent);
  }
  updateTotal(){
    this.billservice.formData.TotalPrice=this.orderservice.list.reduce((prev,curr)=>{
      return prev+ curr.Total;
    },0);
  }
  onDelete(Id:number, i:number){
    this.orderservice.list.splice(i,1);
    this.updateTotal();
  }
  updateForm(selectedRecord: Order,  i: number){
    this.orderservice.index = i;
    this.orderservice.formData = Object.assign({}, selectedRecord);
    this.modalService.open(OrderUpdateComponent);
  }
  // openModal(){
  //   this.modalService.open(OrderFormComponent);
  // }

  resetForm(form?: NgForm){
    this.orderservice.list=[];
  }

  onSubmit(form: NgForm){
    this.tableservice.putTable(this.billservice.formData.TableId).subscribe(
      res => {
        this.tableservice.refreshList();
      },
      err => {
        console.log(err);
      }
    )
    this.billservice.postBill(form, this.orderservice.list).subscribe(res =>{
      this.resetForm();
      this.toastr.success("Đã thêm bill");
    })

  }
}
