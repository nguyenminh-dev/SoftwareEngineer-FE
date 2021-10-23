import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-header-layout1',
  templateUrl: './header-layout1.component.html',
  styles: [
  ]
})
export class HeaderLayout1Component implements OnInit {

  constructor(private router : Router ) {}

  ngOnInit(): void {
  }
  Logout(){
    localStorage.removeItem('userToken');
    sessionStorage.removeItem('username'); 
    this.router.navigate(['/login']);
   }
}
