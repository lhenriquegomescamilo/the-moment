import {ContactsComponent} from "./contacts.component";
import {RouterModule} from "@angular/router";
/**
 * Created by camilo on 26/03/17.
 */
const CONTACTS_ROUTER = [
  {
    path: '', component: ContactsComponent, children: []
  }
];
export const CONTACTS_ROUTING = RouterModule.forChild(CONTACTS_ROUTER);
