import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBreed, IImage } from '../interfaces';
import { BaseService } from './base.service';

const END_POINT = 'images';

@Injectable({ providedIn: 'root' })
export class ImageService extends BaseService<IImage> {
	constructor(
		private _httpCli: HttpClient
	) {
		super(END_POINT, _httpCli)
	}
}
