import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  isLoginError: boolean = false;
  constructor(private authService:AuthServiceService, private router : Router) { }
  ngOnInit() {
    this.initForm();
    if (localStorage.getItem('userToken')!=null){
      this.router.navigate(['']);
    }
  }
  initForm(){
    this.formGroup= new FormGroup({
      username: new FormControl('',[Validators.required]), 
      password: new FormControl('',[Validators.required])
    })
  }
  loginProcess(){
    if (this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe((result)=>{
        localStorage.setItem('userToken',result.token);
        sessionStorage.setItem('username', this.formGroup.controls['username'].value);
        this.router.navigate(['']);
        
        
        console.log(this.formGroup.value);
        
      },
      (err: HttpErrorResponse)=>{
          this.isLoginError=true;
      }
      )
    }
  }
}
