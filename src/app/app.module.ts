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
import { HomeComponent } from './home/home.component';
import {HomeModule} from "./home/home.module";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HomeModule,
    ROUTING
  ],
  providers: [CookieService, LoginService, AuthGuardService, AuthUserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
