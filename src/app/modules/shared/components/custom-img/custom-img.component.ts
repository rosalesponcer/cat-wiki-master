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

	get typeClass() {
		return this.type === 'rounded' ? 'custom-img__content--rounded' : '';
	}
}
