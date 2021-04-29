import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { SizingService } from './providers/sizing.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,

		HomeModule
	],
	providers: [
		SizingService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
