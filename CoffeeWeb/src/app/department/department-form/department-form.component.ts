import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../shared/department.service';
import { NgForm } from '@angular/forms';
import { Department } from '../../shared/department.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styles: [
  ]
})
export class DepartmentFormComponent implements OnInit {

  constructor(public service: DepartmentService,
    private toastr: ToastrService,
    private route: ActivatedRoute, 
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private router: Router) {
  }
  ngOnInit(): void {
  }
  cancel()
  {
    this.router.navigate(['../../department'], {relativeTo: this.route})
  }
  
  updateRecord(form: NgForm) {

    this.service.putDepartment().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Đã cập nhật thông tin phòng ban')
      },
      err => {
        console.log(err);
      }
    );
    this.activeModal.close();
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Department();
  }

}
