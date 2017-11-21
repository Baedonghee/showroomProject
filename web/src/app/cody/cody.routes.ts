import { Routes, RouterModule } from "@angular/router";

import { CodyComponent } from "./cody.component";
import { CodyViewComponent } from "./cody-view/cody-view.component";
import { CodyAddComponent } from "./cody-add/cody-add.component";
import { CodyEditComponent } from "./cody-edit/cody-edit.component";

export const CODY_ROUTES: Routes = [
	{ path : '',component: CodyComponent, children:[
		{ path : '', component: CodyViewComponent },
		{ path : 'add', component: CodyAddComponent},
		{ path : 'edit', component: CodyEditComponent, data: [{isProd: true}]}
	]}
];

export const codyRouting = RouterModule.forChild(CODY_ROUTES);