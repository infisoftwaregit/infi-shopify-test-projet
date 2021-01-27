import { NgModule } from '@angular/core';
import {MaterialModule} from './material.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [CommonModule, FormsModule, MaterialModule],
  declarations: []
})
export class SharedModule {}
