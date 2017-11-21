import { Routes, RouterModule } from "@angular/router";

import { ClothComponent } from "./cloth.component";
import { ClothViewComponent } from "./cloth-view/cloth-view.component";
import { ClothAddComponent } from "./cloth-add/cloth-add.component";
import { ClothEditComponent } from "./cloth-edit/cloth-edit.component";

export const CLOTH_ROUTES: Routes = [
	{ path : '',component: ClothComponent, children:[
		{ path : '', component: ClothViewComponent },
		{ path : 'add', component: ClothAddComponent},
		{ path : 'edit', component: ClothEditComponent},
		{ path : ':type', component:ClothViewComponent}
	]}
];

export const clothRouting = RouterModule.forChild(CLOTH_ROUTES);