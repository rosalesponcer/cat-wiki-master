import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'custom-img',
	templateUrl: 'custom-img.component.html',
	styleUrls: ['custom-img.component.scss']
})

export class CustomImgComponent {
	@Input() data: string = 'https://placekitten.com/200/300';
	@Input() alt: string = '';
	@Input() type: 'rounded' | 'square' = 'rounded';

	loaded: boolean = false;

	get typeClass() {
		if (!this.loaded) return 'custom-img__content--hidden';
		else return this.type === 'rounded' ? 'custom-img__content--rounded' : '';
	}
}
