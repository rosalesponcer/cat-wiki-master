import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
	selector: 'search-option-list',
	templateUrl: 'search-option-list.component.html',
	styleUrls: ['search-option-list.component.scss']
})

export class SearchOptionListComponent {
	@Input() results: any[] = []
	@Input() setFocus: 'ArrowUp' | 'ArrowDown';

	@Output() onSelect = new EventEmitter<any>();

	currentSelected: number = 0;

	optionList: HTMLButtonElement[] = [];

	constructor(
		private _ref: ElementRef
	) { }

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.setFocus.firstChange) return;

		let key = changes.setFocus && changes.setFocus.currentValue;

		if (!key) return;

		this.optionList = this._ref.nativeElement.querySelectorAll('.search-option-list__button');

		this._setFocus(this.optionList, key);
	}


	private _setFocus(optionList: HTMLButtonElement[], key: 'ArrowUp' | 'ArrowDown') {

		if (key === 'ArrowUp' && !this.currentSelected) {
			this._setClass(optionList[this.currentSelected]);

			return;
		}


		this.currentSelected = key === 'ArrowDown' ? this.currentSelected + 1 : this.currentSelected - 1;
		this._setClass(optionList[this.currentSelected]);
	}

	private _setClass(element: HTMLButtonElement) {
		element.focus();
		element.parentElement.classList.add('search-option-list__option--active');
		console.log('setca');
	}

	selectResult(result: any) {
		this.onSelect.emit(result);
	}

	onKeyPress({ key }: KeyboardEvent) {
		this._setFocus(this.optionList, <'ArrowUp' | 'ArrowDown'>key)
	}

	onBlur(buttonElement: HTMLButtonElement) {
		buttonElement.parentElement.classList.toggle('search-option-list__option--active');
	}
}
