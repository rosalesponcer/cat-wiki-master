import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'level-bar',
	templateUrl: 'level-bar.component.html',
	styleUrls: ['level-bar.component.scss']
})

export class LevelBarComponent {
	@Input() levelValue: number = 5;

	value: any[] = [];

	ngOnInit() {
		this.value = new Array(5);
	}
}
