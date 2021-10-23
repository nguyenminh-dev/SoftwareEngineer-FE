import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../shared/order.service';
import { NgForm } from '@angular/forms';
import { Order } from '../../shared/order.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { DrinkService } from '../../shared/drink.service'
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BillService } from '../../shared/bill.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: []
})
export class OrderFormComponent implements OnInit {
  constructor(public service: OrderService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    public DrinkService: DrinkService,
    private BillService: BillService,
    private router: Router)  { }

  ngOnInit(): void {
    this.updateTotal();
  }
  updateTotal(){
    this.service.formData.Total=this.service.formData.Price*this.service.formData.Quantity;
  }
  updateGTotal(){
    this.BillService.formData.TotalPrice=this.service.list.reduce((prev,curr)=>{
      return prev+ curr.Total;
    },0);
  }
  onSubmit(form:NgForm){
    
    this.service.list.push(form.value);
    this.updateGTotal();
    this.activeModal.close();
  }
}
