import { NgModule } from "@angular/core";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { TagInputModule } from 'ng2-tag-input';
import { SelectModule } from 'ng2-select';
import { DndModule } from 'ng2-dnd';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Ng2PaginationModule } from 'ng2-pagination';


import { CodyComponent } from "./cody.component";
import { CodyViewComponent } from "./cody-view/cody-view.component";
import { CodyAddComponent } from "./cody-add/cody-add.component";
import { CodyEditComponent } from './cody-edit/cody-edit.component';

import { codyRouting } from "./cody.routes";


@NgModule({
	declarations: [
		CodyComponent,
		CodyViewComponent,
		CodyAddComponent,
		CodyEditComponent
	],
	providers:[],
	imports: [
		codyRouting,
		ReactiveFormsModule,
		FormsModule,
		CommonModule,
		TagInputModule,
		SelectModule,
		DndModule.forRoot(),
		Ng2Bs3ModalModule,
		Ng2PaginationModule
	]

})
export class CodyModule {}