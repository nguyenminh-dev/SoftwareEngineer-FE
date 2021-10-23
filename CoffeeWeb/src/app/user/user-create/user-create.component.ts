import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../shared/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../../shared/user.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { DepartmentService } from '../../shared/department.service'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styles: [
  ]
})
export class UserCreateComponent implements OnInit {
  constructor(private modalService: NgbModal,
    public service: UserService,
    private toastr: ToastrService,
    public DepartService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    
    this.DepartService.refreshList();
  }
  open(content: any) {
    this.service.formData = new User();
    if(this.router.url==='/user/create')
    {
      this.router.navigate(['../user'], {relativeTo: this.route})
    }
    this.modalService.open(content);
  }

  insertRecord(form: NgForm) {
    
    this.service.postUser().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Đã thêm nhân viên')
      },
      err => {
        console.log(err);
      }
    );
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new User();
  }
}
