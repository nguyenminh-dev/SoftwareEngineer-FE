import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../../shared/user.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { DepartmentService } from '../../shared/department.service'
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: [
  ]
})
export class UserFormComponent implements OnInit {

  constructor(public service: UserService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    public DepartService: DepartmentService,
    private router: Router) {
  }
  ngOnInit(): void {
    this.DepartService.refreshList();
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
    this.service.putUser().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Đã cập nhật thông tin nhân viên')
      },
      err => {
        console.log(err);
      }
    );
    this.router.navigate(['../../user'], {relativeTo: this.route})
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new User();
  }
  cancel()
  {
    this.router.navigate(['../../user'], {relativeTo: this.route})
  }
}
