import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EMPLOYERS_ROUTING} from "./employers.routing";
import {EmployersComponent} from "./employers.component";

@NgModule({
  imports: [
    CommonModule,
    EMPLOYERS_ROUTING
  ],
  declarations: [EmployersComponent],
  exports: [EmployersComponent]
})
export class EmployersModule {
}
