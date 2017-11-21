import { Routes, RouterModule } from "@angular/router";

import { UserComponent } from "./user.component";
import { UserSigninComponent } from "./user-signin/user-signin.component";

export const USER_ROUTES: Routes = [
	{ path : '',component: UserComponent, children:[
		{ path : '', component: UserSigninComponent },
	]}
];

export const userRouting = RouterModule.forChild(USER_ROUTES);