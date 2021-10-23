import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../../shared/drink.service';
import { NgForm } from '@angular/forms';
import { Drink } from '../../shared/drink.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { CategoryService } from '../../shared/category.service'
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-menu-form',
    templateUrl: './menu-form.component.html',
  styles: [
  ]
})
export class MenuFormComponent implements OnInit {

  constructor(public service: DrinkService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    public CategoryService: CategoryService,
    private router: Router) {
  }
  ngOnInit(): void {
    this.CategoryService.refreshList();
  }
  // onSubmit(form: NgForm) {

  //   if (this.service.formData.Id == "") //we will use the id as identifier for updating or insertion
  //     this.insertRecord(form);
  //   else
  //     this.updateRecord(form);
  // }
  // insertRecord(form: NgForm) {
  //   this.service.postUser().subscribe(
  //     res => {
  //       this.resetForm(form);
  //       this.service.refreshList();
  //       this.toastr.success('Đã thêm nhân viên')
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }
  updateRecord(form: NgForm) {
    console.log(this.service.formData)
    this.service.putDrink().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Đã cập nhật thông tin món')
      },
      err => {
        console.log(err);
      }
    );
    this.activeModal.close();
    }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Drink();
  }
  cancel()
  {
    this.router.navigate(['../../menu'], {relativeTo: this.route})
  }
}
