import { Component } from '@angular/core';
import { HERO_IMG_LIST, IImg } from 'src/app/const';
import { SizingService } from 'src/app/providers/sizing.service';

@Component({
	selector: 'home-hero-section',
	templateUrl: 'home-hero-section.component.html',
	styleUrls: ['home-hero-section.component.scss']
})

export class HomeHeroSection {
	text: string = '';
	breedList: IImg[] = [];

	constructor(
		public sizingSrv: SizingService
	) { }

	ngOnInit() {
		this.breedList = HERO_IMG_LIST;
	}

	onInput(text: string = '') {
		text = text || '';
		this.text = text;
	}
}
