import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"; 
import { Router } from "@angular/router";

import { Observable } from "rxjs/Rx";

import { UserAuthService } from "../shared/auth.service";
import { EmitterService } from "../../emitter.service";
import { User } from "../shared/user.interface";

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html'
})
export class UserSigninComponent implements OnInit {

  myForm: FormGroup;
 // private userModel:User = new User('','');
  

  constructor(private fb: FormBuilder, private authService: UserAuthService, private router: Router) { }

  public onSignin() {
  	this.authService.signinUser(this.myForm.value).subscribe(res => {
      
      if(res.msg=="로그인 성공"){
        localStorage.setItem("shopName",this.myForm.value.shopName);
        this.router.navigate(['/']);
      }
      else if(res.msg=="존재 하지않는 아이디입니다.")
        alert("아이디를 확인해주세요");
      else if(res.msg=="fail")
        alert("비밀번호를 확인해주세요")
      //this.userModel=new User(this.myForm.value.email,this.myForm.value.password);
    },
    error => {
      alert('The user could not login');
    });
  }
  
  
  ngOnInit():any {
  	this.myForm = this.fb.group({
  		shopName: ['', Validators.required],
  		shopPwd: ['', Validators.required]
  	});
  }

  

}
