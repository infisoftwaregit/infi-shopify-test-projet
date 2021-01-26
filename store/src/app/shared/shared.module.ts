import { NgModule } from '@angular/core';
import {MaterialModule} from './material.module';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [CommonModule, MaterialModule],
  declarations: []
})
export class SharedModule {}
