import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { homeRoutes } from './home.routing';

import { HomePageModule } from './pages/home-page.module';
import { HomeComponentsModule } from './components/home-components.module';



const LIST = [
	HomePageModule
];

@NgModule({

	imports: [
		RouterModule.forChild(homeRoutes),

		HomePageModule,
		HomeComponentsModule
	],
	exports: LIST
})
export class HomeModule { }
