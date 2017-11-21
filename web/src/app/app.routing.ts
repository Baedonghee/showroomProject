import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { UserEditComponent } from "./user/user-edit/user-edit.component";


const APP_ROUTES: Routes =[
	{ path: '', redirectTo:'/home',pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'user', loadChildren:'app/user/user.modules#UserModule'},
	{ path: 'user/edit', component: UserEditComponent},
	{ path: 'cloth', loadChildren:'app/cloth/cloth.modules#ClothModule'},
	{ path: 'cody', loadChildren:'app/cody/cody.modules#CodyModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);