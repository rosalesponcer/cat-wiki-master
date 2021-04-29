import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SizingService {
	private sm: boolean = false;

	constructor() {
		this.sm = (window.screen.width <= 480) ? true : false;
	}

	isSm() {
		return this.sm;
	}
}
