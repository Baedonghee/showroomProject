import { Component, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";

import { Subscription } from "rxjs/Rx";

import { UserAuthService } from "./user/shared/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnDestroy {
  isAuthenticated = false;

  private subscription: Subscription;
  showName : string;

  
  constructor(private authService: UserAuthService, private router: Router) { }
  isAuth() {

    this.showName = localStorage.getItem('shopName');

    this.subscription=this.authService.isAuthenticated().subscribe(
           authStatus => this.isAuthenticated = authStatus
    );
    return this.isAuthenticated;
    
  }

  onEdit() {

  }


  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
