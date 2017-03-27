/**
 * Created by camilo on 25/03/17.
 */
import {LoginComponent} from '../login/login.component';
import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AuthGuardService} from "../services/auth-guard.service";

const APP_ROUTERS = [
  {path: 'contacts', loadChildren: 'app/contacts/contacts.module#ContactsModule', canActive: [AuthGuardService]},
  {path: 'employers', loadChildren: 'app/employers/employers.module#EmployersModule ', canActive: [AuthGuardService]},
//ContactsModule
  {path: 'login', component: LoginComponent},
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTERS);
