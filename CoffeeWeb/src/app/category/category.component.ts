import { Component, OnInit } from '@angular/core';
import {  Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CategoryFormComponent } from './category-form/category-form.component'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: []
})
export class CategoryComponent implements OnInit {

  constructor(public service: CategoryService, private toastr: ToastrService,
    private route: ActivatedRoute, private router: Router,private modalService: NgbModal,) { }



    ngOnInit(): void {
      this.service.refreshList();
    }

    populateForm(selectedRecord: Category) {
      this.service.formData = Object.assign({}, selectedRecord);
      this.modalService.open(CategoryFormComponent);

    }
  
    onDelete(Id: number) {
      if (confirm('Bạn có chắc chắn muốn xóa danh mục này?')) {
        this.service.deleteCategory(Id)
          .subscribe(
            res => {
              this.service.refreshList();
              this.toastr.error("Đã xóa danh mục ");
            },
            err => { console.log(err) }
          )
      }
    }
    addRecord()
    {
    }
  
  }
