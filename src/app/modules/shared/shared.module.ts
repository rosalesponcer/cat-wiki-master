import { NgModule } from '@angular/core';
import { SharedComponentModule } from './components/shared-component.module';

const LIST=[
	SharedComponentModule
]

@NgModule({
	imports: LIST,
	exports: LIST,
})
export class SharedModule { }
