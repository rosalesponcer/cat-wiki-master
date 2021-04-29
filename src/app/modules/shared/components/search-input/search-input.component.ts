import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SizingService } from 'src/app/providers/sizing.service';

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


	constructor(
		private _sizingSrv: SizingService
	) { }

	ngAfterViewInit() {
		if (this.popup && this.text && this.inputElement) {
			this.inputElement.nativeElement.focus();
		}
	}

	sendText() {
		this.onInput.emit(this.text);
	}

	clear() {
		this.text = '';
		this.sendText();
	}

	get placeholder() {
		return this._sizingSrv.isSm() ? 'Search' : 'Enter your breed';
	}
}
