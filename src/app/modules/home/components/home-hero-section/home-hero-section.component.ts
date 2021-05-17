import { Component, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HERO_IMG_LIST, IImg } from 'src/app/const';
import { IBreed } from 'src/app/interfaces';
import { SizingService } from 'src/app/providers/sizing.service';
import { BreedService } from 'src/app/services/breed.service';



@Component({
	selector: 'home-hero-section',
	templateUrl: 'home-hero-section.component.html',
	styleUrls: ['home-hero-section.component.scss']
})

export class HomeHeroSection {
	text: string = '';
	breedList: IBreed[] = [];
	searchResult: IBreed[] = [];

	constructor(
		public sizingSrv: SizingService,
		private breedSrv: BreedService,
		private _router: Router
	) { }

	ngOnInit() {
		let page = Math.floor(Math.random() * (16 - 0)) + 0;

		this.breedSrv.query({ limit: 4, page })
			.subscribe(breeds => {
				this.breedList = breeds;
				console.log(breeds)
			});
	}

	onInput(text: string = '') {
		setTimeout(() => {
			text = text || '';
			this.text = text;

			this.breedSrv.searchByParam({ q: text })
				.subscribe(res => {
					this.searchResult = res;
				});
		}, 150);
	}

	selectBreed(breed: IBreed) {
		this._router.navigate([`breed/${breed.name}`]);
	}
}
