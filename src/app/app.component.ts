import { Component } from '@angular/core';
import { IBreed } from './interfaces';
import { BreedService } from './services/breed.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(
		private _breedSrv: BreedService
	) { }
}
