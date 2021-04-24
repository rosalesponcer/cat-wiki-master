import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'search-popup',
	templateUrl: 'search-popup.component.html',
	styleUrls: ['search-popup.component.scss']
})

export class SearchPopupComponent {
	@Input() text: string = '';
	@Output() onClose = new EventEmitter<boolean>();

	close() {
		this.onClose.emit(false);
	}
}
