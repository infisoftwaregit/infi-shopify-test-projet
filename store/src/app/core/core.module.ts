import { CommonModule } from '@angular/common';
import { Optional } from '@angular/core';
import { NgModule, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import {SharedModule} from '../shared/shared.module';
import { AlertComponent } from './layout/alert/alert.component';

@NgModule({
  imports: [ RouterModule, HttpClientModule, SharedModule],
  exports: [ToolbarComponent, AlertComponent],
  declarations: [ToolbarComponent, AlertComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'Core is already loaded. Import it in the AppModule only');
    }
  }
}
