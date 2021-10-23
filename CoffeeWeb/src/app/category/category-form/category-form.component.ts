import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/category.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../../shared/category.model';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: []
})
export class CategoryFormComponent implements OnInit {

  constructor(public service: CategoryService,
    private toastr: ToastrService,
    private route: ActivatedRoute, 
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private router: Router) 
    {
  
    }

  ngOnInit(): void {
  }
  cancel()
  {
    this.router.navigate(['../../category'], {relativeTo: this.route})
  }
  
  updateRecord(form: NgForm) {

    this.service.putCategory().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Đã cập nhật thông tin danh mục')
      },
      err => {
        console.log(err);
      }
    );
    this.activeModal.close();
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Category();
  }

}

