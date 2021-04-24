import { Component } from '@angular/core';
import { HERO_IMG_LIST, IImg } from 'src/app/const';

@Component({
	selector: 'home-hero-section',
	templateUrl: 'home-hero-section.component.html',
	styleUrls: ['home-hero-section.component.scss']
})

export class HomeHeroSection {
	text: string = '';
	breedList: IImg[] = [];

	ngOnInit() {
		this.breedList = HERO_IMG_LIST;
	}

	onInput(text: string = '') {
		text = text || '';
		this.text = text;
	}
}
