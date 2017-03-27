import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsComponent} from "./contacts.component";
import {CONTACTS_ROUTING} from "./contacts.routing";

@NgModule({
  imports: [
    CommonModule,
    CONTACTS_ROUTING
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule {
}
