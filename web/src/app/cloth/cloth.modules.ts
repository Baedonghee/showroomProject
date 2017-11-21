import { NgModule } from "@angular/core";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { clothRouting } from "./cloth.routes";

import { ClothComponent } from './cloth.component';
import { ClothViewComponent } from './cloth-view/cloth-view.component';
import { ClothAddComponent } from "./cloth-add/cloth-add.component";
import { CategorycodeService } from "./shared/categorycode.service";
import { ClothEditComponent } from "./cloth-edit/cloth-edit.component";
import { Cloth } from "./shared/cloth.interface";
import { Ng2PaginationModule } from 'ng2-pagination';

@NgModule({
	declarations: [
		ClothComponent,
		ClothViewComponent,
		ClothAddComponent,
		ClothEditComponent
	],
	providers:[CategorycodeService, Cloth],
	imports: [clothRouting,
			  ReactiveFormsModule,
			  FormsModule,
			  CommonModule,
			  Ng2PaginationModule]

})
export class ClothModule {}