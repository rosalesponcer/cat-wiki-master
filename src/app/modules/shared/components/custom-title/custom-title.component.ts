import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'custom-title',
	templateUrl: 'custom-title.component.html',
	styleUrls: ['custom-title.component.scss']
})

export class CustomTitleComponent {
	@Input() text: string = '';
	@Input() position: 'top' | 'bottom' = 'top';

	@Input() size: 'md' | 'lg' = 'md';


	get classSize() {
		if (this.size === 'md') return 'custom-title__decorator--md';
		if (this.size === 'lg') return 'custom-title__decorator--lg';
	}

	get classText(){
		if (this.size === 'md') return 'custom-title__text--md';
		if (this.size === 'lg') return 'custom-title__text--lg';
	}
}
