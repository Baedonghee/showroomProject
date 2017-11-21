import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { userRouting } from "./user.routes";

import { UserComponent } from './user.component';
import { UserSigninComponent } from './user-signin/user-signin.component';

@NgModule({
	declarations: [
		UserComponent,
		UserSigninComponent
	],
	providers:[],
	imports: [userRouting,ReactiveFormsModule]

})
export class UserModule {}