import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BreedService } from './breed.service';

const LIST = [
	BreedService
];

@NgModule({
	imports: [
		HttpClientModule
	],
	providers: LIST
})
export class ServiceModule { }
