import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimeLineComponent} from './time-line.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TimeLineComponent],
  exports: [TimeLineComponent]
})
export class TimeLineModule {
}
