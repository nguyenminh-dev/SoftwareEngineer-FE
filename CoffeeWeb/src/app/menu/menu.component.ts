import { Component, OnInit } from '@angular/core';
import { Drink } from '../shared/drink.model';
import { DrinkService } from '../shared/drink.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { MenuFormComponent } from './menu-form/menu-form.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: []
})
export class MenuComponent implements OnInit {

  constructor(public service: DrinkService, private toastr: ToastrService,
    private route: ActivatedRoute, private router: Router,private modalService: NgbModal,) { }

 

    ngOnInit(): void {
      this.service.refreshList();
    }

    populateForm(selectedRecord: Drink) {
      this.service.formData = Object.assign({}, selectedRecord);
      this.modalService.open(MenuFormComponent);
    }
  
    onDelete(Id: number) {
      if (confirm('Bạn có chắc chắn muốn xóa món này?')) {
        this.service.deleteDrink(Id)
          .subscribe(
            res => {
              this.service.refreshList();
              this.toastr.error("Đã xóa món");
            },
            err => { console.log(err) }
          )
      }
    }
    addRecord()
    {
      this.router.navigate(['add'], {relativeTo: this.route})
    }
  
  }
