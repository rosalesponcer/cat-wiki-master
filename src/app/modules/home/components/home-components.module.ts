import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { BlogSection } from './blog-section/blog-section.component';

import { HomeHeroSection } from './home-hero-section/home-hero-section.component';

const LIST = [
	HomeHeroSection,
	BlogSection
];

@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	declarations: LIST,
	exports: LIST
})
export class HomeComponentsModule { }
