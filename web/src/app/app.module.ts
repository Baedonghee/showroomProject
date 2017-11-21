import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { LocalStorageModule } from 'angular-2-local-storage';

import { TagInputModule } from 'ng2-tag-input';
import { SelectModule } from 'ng2-select';


import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import { UserAuthService } from './user/shared/auth.service';
import { UserEditComponent } from "./user/user-edit/user-edit.component";
import { ClothAuthService } from './cloth/shared/cloth.service';
import { CodyAuthService } from './cody/shared/cody.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    JsonpModule,
    LocalStorageModule,
    ReactiveFormsModule,
    SelectModule
    
    
  ],
  providers: [UserAuthService,ClothAuthService,CodyAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
