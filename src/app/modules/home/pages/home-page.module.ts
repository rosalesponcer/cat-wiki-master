import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponentsModule } from '../components/home-components.module';

import { HomePage } from './home-page/home.page';
import { BreedsPage } from './breeds-page/breeds-page';

const LIST = [
	HomePage,
	BreedsPage
]

@NgModule({
	imports: [
		CommonModule,
		SharedModule,

		HomeComponentsModule
	],
	declarations: LIST,
	exports: LIST
})
export class HomePageModule { }
