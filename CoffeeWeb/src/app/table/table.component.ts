import { Component, OnInit } from '@angular/core';
import {Table } from '../shared/table.model';
import {TableService } from '../shared/table.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(public service: TableService, private toastr: ToastrService,
    private route: ActivatedRoute, private router: Router) { }
    // Tables: Table[] =[
  
    //   {Id: 0, Name: 'Bàn 1',Available: true},
    //   {Id: 1, Name: 'Bàn 2',Available: false},
    //   {Id: 2, Name: 'Bàn 3',Available: false},
    // ];  
  ngOnInit(): void {
    this.service.refreshList();
  }
  Delete()
  {
    this.service.deleteTable().subscribe(
      res => {
        this.service.refreshList();
        this.toastr.error('Đã giảm bàn')
      },
      err => {
        console.log(err);
      }
    );
  }
  Add()
  {
    this.service.postTable().subscribe(
      res => {
        this.service.refreshList();
        this.toastr.success('Đã thêm bàn')
      },
      err => {
        console.log(err);
      }
    );
  }
  Toggle(id:number)
  {
    this.service.putTable(id).subscribe(
      res => {
        
        this.service.refreshList();
        
      },
      err => {
        console.log(err);
      }
    )
  }
}
