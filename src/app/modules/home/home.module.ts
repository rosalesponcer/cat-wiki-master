import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import { HomePageModule } from './pages/home-page.module';
import { HomeComponentsModule } from './components/home-components.module';
import { homeRouting } from './home.routing';



const LIST = [
	HomePageModule
];

@NgModule({

	imports: [
		HomePageModule,
		HomeComponentsModule
	],
	exports: LIST
})
export class HomeModule { }
