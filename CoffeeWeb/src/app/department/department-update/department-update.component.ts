import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DepartmentService } from '../../shared/department.service';
import { NgForm } from '@angular/forms';
import { Department } from '../../shared/department.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: []
})
export class DepartmentUpdateComponent implements OnInit {


  ngOnInit(): void
  {


  }


  constructor(private modalService: NgbModal,public service: DepartmentService,private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router) {}

  open(content: any) {
    this.service.formData.Name=""
    if(this.router.url==='/department/update')
    {
      this.router.navigate(['../department'], {relativeTo: this.route})
    }
    this.modalService.open(content
    //   , {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //   this.closeResult = `Hủy cập nhật`;
    // }, (reason) => {
    //   this.closeResult = `Đã thêm phòng ban`;
    // }
    );
  }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

  insertRecord(form: NgForm) {
    this.service.postDepartment().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Đã thêm phòng ban')
      },
      err => {
        console.log(err);
      }
    );
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Department();
  }
}
