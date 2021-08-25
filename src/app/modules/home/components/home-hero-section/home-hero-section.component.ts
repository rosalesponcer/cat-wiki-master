import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SizingService } from 'src/app/providers/sizing.service';
import { BreedService } from 'src/app/services/breed.service';

import { IBreed } from 'src/app/interfaces';
import { SubscriptionBin } from 'src/app/modules/core/helpers/SubscriptionBin';

@Component({
	selector: 'home-hero-section',
	templateUrl: 'home-hero-section.component.html',
	styleUrls: ['home-hero-section.component.scss']
})

export class HomeHeroSection {
	text: string = '';
	breedList: IBreed[] = [];
	searchResult: IBreed[] = [];
	keyPresses: 'ArrowUp' | 'ArrowDown';

	subscriptions = new SubscriptionBin();
	constructor(
		public sizingSrv: SizingService,
		private breedSrv: BreedService,
		private _router: Router
	) { }

	ngOnInit() {
		let page = Math.floor(Math.random() * (16 - 0)) + 0;

		this.subscriptions.add = this.breedSrv.query({ limit: 4, page })
			.subscribe(breeds => {
				this.breedList = breeds;
				console.log(breeds)
			});
	}

	ngOnDestroy() {
		this.subscriptions.clearAll();
	}

	onInput(text: string = '') {
		setTimeout(() => {
			text = text || '';
			this.text = text;

			this.breedSrv.searchByParam({ q: text })
				.subscribe(res => {
					this.searchResult = res;
				});
		}, 0);
	}

	selectBreed = (breed: IBreed) => this._router.navigate([`breed/${breed.name}`]);
}
