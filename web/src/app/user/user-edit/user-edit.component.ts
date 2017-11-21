import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"; 

import { UserAuthService } from "../shared/auth.service";
import { User } from "../shared/user.interface";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit, OnDestroy {

  myForm: FormGroup;
  private userInfo;
  private company;


  constructor(private fb: FormBuilder, private authService: UserAuthService ) { 
  		
  }  

  loadUser() {
  	this.authService.getinUser().subscribe(response => {
  		this.company = response.result.company;
  		
  	},
  	error =>{
  		alert('The user loading error');
  	})
  }

  ngOnInit() {  
  	this.loadUser();  
  	this.myForm = this.fb.group({
  		company: [{value:'',disabled: true}, Validators.required],
  		email: ['', Validators.required],
  		url: ['', Validators.required],
  		callnumber: ['', Validators.required],
  		password: ['', Validators.required],
  		confirmpassword: ['', Validators.required]
  	});
  }
  ngOnDestroy() {
  	
  }


}
