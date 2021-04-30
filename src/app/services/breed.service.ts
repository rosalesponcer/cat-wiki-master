import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBreed } from '../interfaces';
import { BaseService } from './base.service';

const END_POINT = 'breeds';

@Injectable({ providedIn: 'root' })
export class BreedService extends BaseService<IBreed> {
	constructor(
		private _httpCli: HttpClient
	) {
		super(END_POINT, _httpCli)
	}
}
