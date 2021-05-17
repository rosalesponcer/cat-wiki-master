import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'search-option-list',
	templateUrl: 'search-option-list.component.html',
	styleUrls: ['search-option-list.component.scss']
})

export class SearchOptionListComponent {
	@Input() results: any[] = []

	@Output() onSelect = new EventEmitter<any>();

	selectResult(result: any) {
		this.onSelect.emit(result);
	}
}
