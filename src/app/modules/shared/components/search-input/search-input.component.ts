import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
	selector: 'search-input',
	templateUrl: 'search-input.component.html',
	styleUrls: ['search-input.component.scss']
})

export class SearchInputComponent {
	@ViewChild('input') inputElement: ElementRef;
	@Input() text: string = '';
	@Input() open: boolean = false;
	@Input() border: boolean = false;
	@Input() popup: boolean = false;

	@Output() onInput = new EventEmitter<string>();

	ngAfterViewInit() {
		if (this.popup && this.text && this.inputElement) {
			this.inputElement.nativeElement.focus();
		}
	}

	sendText() {
		this.onInput.emit(this.text);
	}
}
