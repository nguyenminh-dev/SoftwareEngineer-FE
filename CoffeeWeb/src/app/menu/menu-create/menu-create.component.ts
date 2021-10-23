import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DrinkService } from '../../shared/drink.service';
import { NgForm } from '@angular/forms';
import { Drink } from '../../shared/drink.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { CategoryService } from '../../shared/category.service'
@Component({
  selector: 'app-menu-create',
  templateUrl: './menu-create.component.html',
  styleUrls: []
})
export class MenuCreateComponent implements OnInit {
  constructor(private modalService: NgbModal,
    public service: DrinkService,
    private toastr: ToastrService,
    public CategoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    
    this.CategoryService.refreshList();
  }
  open(content: any) {
    this.service.formData = new Drink();
    if(this.router.url==='/menu/add')
    {
      this.router.navigate(['../menu'], {relativeTo: this.route})
    }
    this.modalService.open(content);
  }

  insertRecord(form: NgForm) {
    console.log(this.service.formData)
    this.service.postDrink().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Đã thêm món')
      },
      err => {
        console.log(err);
      }
    );
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Drink();
  }
}

