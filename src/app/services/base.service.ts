import { Injectable } from '@angular/core';
import { API_KEY, BASE_URL } from './config.service';
import { HttpClient, HttpParams } from '@angular/common/http'
import { IParameters } from '../interfaces';
import { Observable } from 'rxjs';

const CREDENTIAL = API_KEY;
const BASE = BASE_URL;

export class BaseService<T> {
	constructor(
		private __endPoint: string,
		private __httpClient: HttpClient
	) { }

	searchByParam(params: IParameters) {
		return this.query(params, 'search');
	}

	searchOneByParam(params: IParameters) {
		return this.getOne(params, 'search');
	}

	query(params: IParameters, addUrl?: string) {
		addUrl = addUrl || '';
		let url = BASE + this.__endPoint + '/' + addUrl;

		return this.__httpClient.get<T[]>(url, {
			headers: this._buildHeaders(),
			params: this._buildParams(params)
		})
	}

	getOne(params: IParameters, addUrl?: string) {

		addUrl = addUrl || '';
		let url = BASE + this.__endPoint + '/' + addUrl;

		return this.__httpClient.get<T>(url, {
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
