import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';
import { HomeService } from 'src/app/shared/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    
  ]
})
export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrService,
    public UService: UserService ,
    public service: HomeService,
    private route: ActivatedRoute,
    private router: Router) { }
  DepartId: any
  username: any = sessionStorage.getItem("username")
  ngOnInit(): void {
    //debugger;
    this.UService.refreshList();
    this.service.getDepartId(this.username).subscribe((res:any)=>
    {
    this.DepartId= res}
    );
  }
  
}
