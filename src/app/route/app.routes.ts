/**
 * Created by camilo on 25/03/17.
 */
import {LoginComponent} from '../login/login.component';
import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";

const APP_ROUTERS = [
  {path: 'login', component: LoginComponent},
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTERS);
