import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppFooter } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { CustomImgComponent } from './custom-img/custom-img.component';
import { CustomTitleComponent } from './custom-title/custom-title.component';
import { LevelBarComponent } from './level-bar/level-bar.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchOptionListComponent } from './search-option-list/search-option-list.component';
import { SearchPopupComponent } from './search-popup/search-popup.component';

const LIST = [
	AppHeaderComponent,
	SearchInputComponent,
	SearchPopupComponent,
	CustomTitleComponent,
	CustomImgComponent,
	AppFooter,
	SearchOptionListComponent,
	LevelBarComponent
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	declarations: LIST,
	exports: LIST
})
export class SharedComponentModule { }
