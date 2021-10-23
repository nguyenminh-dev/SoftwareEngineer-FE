import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { UserFormComponent } from './user-form/user-form.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService,
    private route: ActivatedRoute, private router: Router, private modalService: NgbModal,) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: User) {
    this.service.formData = Object.assign({}, selectedRecord);
    this.modalService.open(UserFormComponent);
  }

  onDelete(Id: string) {
    if (confirm('Bạn có chắc chắn muốn xóa nhân viên này?')) {
      this.service.deleteUser(Id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Đã xóa nhân viên");
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
