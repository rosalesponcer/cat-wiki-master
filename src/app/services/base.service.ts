import { Injectable } from '@angular/core';
import { API_KEY, BASE_URL } from './config.service';
import { HttpClient, HttpParams } from '@angular/common/http'
import { IParameters } from '../interfaces';
import { Observable } from 'rxjs';

const CREDENTIAL = API_KEY;
const BASE = BASE_URL;

export class BaseService<T> {
	constructor(
		private __endPoitn: string,
		private __httpCli: HttpClient
	) { }

	searchByName(params) {
		return this.query(params, '/search');
	}

	query(params: IParameters, addUrl?: string) {
		addUrl = addUrl || '';
		return this.__httpCli.get<T[]>(BASE + this.__endPoitn + addUrl, {
			headers: this._buildHeaders(),
			params: this._buildParams(params)
		})
	}

	private _buildHeaders() {
		return {
			'Content-Type': 'application/json',
			'x-api-key': CREDENTIAL
		}

	}

	private _buildParams(params: IParameters) {
		let temp = {};
		Object.keys(params).forEach(key => {
			temp[key.toString()] = params[key].toString();
		})

		return temp;
	}
}
