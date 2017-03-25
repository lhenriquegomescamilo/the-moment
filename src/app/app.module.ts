import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ROUTING} from "./route/app.routes";
import {AuthUserService} from "./services/auth-user.service";
import {CookieService} from "angular2-cookie/core";
import {AuthGuardService} from "./service/auth-guard.service";
import {LoginService} from "./login/login.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ROUTING
  ],
  providers: [CookieService, LoginService, AuthGuardService, AuthUserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
