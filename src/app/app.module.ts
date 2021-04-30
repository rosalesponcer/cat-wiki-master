import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { SizingService } from './providers/sizing.service';
import { BaseService } from './services/base.service';
import { BreedService } from './services/breed.service';
import { ServiceModule } from './services/service.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,

		HomeModule,
		ServiceModule
	],
	providers: [
		SizingService,
		BreedService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
