import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBreed } from 'src/app/interfaces';
import { BreedService } from 'src/app/services/breed.service';

@Component({
	selector: 'search-popup',
	templateUrl: 'search-popup.component.html',
	styleUrls: ['search-popup.component.scss']
})

export class SearchPopupComponent {
	@Input() text: string = '';
	@Input() results: IBreed[] = [];
	@Output() onClose = new EventEmitter<boolean>();

	constructor(
		private breedSrv: BreedService
	) { }

	ngOnInit() {
		if (window.screen.width <= 375) document.body.style.overflowY = 'hidden';
	}

	close() {
		this.onClose.emit(false);
		document.body.style.overflowY = 'auto';
	}

	onInput(text: string = '') {
		setTimeout(() => {
			text = text || '';
			this.text = text;

			this.breedSrv.searchByParam({ q: text })
				.subscribe(res => {
					this.results = res;
				});
		}, 150);
	}
}
