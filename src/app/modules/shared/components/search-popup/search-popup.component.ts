import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBreed } from 'src/app/interfaces';

@Component({
	selector: 'search-popup',
	templateUrl: 'search-popup.component.html',
	styleUrls: ['search-popup.component.scss']
})

export class SearchPopupComponent {
	@Input() text: string = '';
	@Input() results: IBreed[] = [];
	@Output() onClose = new EventEmitter<boolean>();

	ngOnInit() {
		if (window.screen.width <= 375) document.body.style.overflowY = 'hidden';
	}

	close() {
		this.onClose.emit(false);
		document.body.style.overflowY = 'auto';
	}
}
