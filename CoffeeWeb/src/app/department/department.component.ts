import { Component, OnInit } from '@angular/core';
import { Department } from '../shared/department.model';
import { DepartmentService } from '../shared/department.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DepartmentFormComponent } from './department-form/department-form.component'

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styles: [

  ]
})
export class DepartmentComponent implements OnInit {

  constructor(public service: DepartmentService, private toastr: ToastrService,
    private route: ActivatedRoute, private router: Router,private modalService: NgbModal,) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: Department) {
    this.service.formData = Object.assign({}, selectedRecord);
    this.modalService.open(DepartmentFormComponent);
  }

  onDelete(Id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa phòng ban này?')) {
      this.service.deleteDepartment(Id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Đã xóa phòng ban",
            
            );
          },
          err => { console.log(err) }
        )
    }
  }
  // addRecord()
  // {
    
  // }

}
