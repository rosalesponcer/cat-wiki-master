import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedsPage } from './modules/home/pages/breeds-page/breeds-page';
import { HomePage } from './modules/home/pages/home-page/home.page';

const routes: Routes = [
	{
		path: '',
		component: HomePage
	},
	{
		path: 'breed/:name',
		component: BreedsPage
	}
	// {
	// 	path: 'breed',
	// 	loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule)
	// }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
