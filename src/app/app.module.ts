import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {ROUTING} from "./route/app.routes";
import {AuthUserService} from "./services/auth-user.service";
import {CookieService} from "angular2-cookie/core";
import {AuthGuardService} from "./services/auth-guard.service";
import {LoginService} from "./login/login.service";
import {HomeModule} from "./home/home.module";

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
    HomeModule,
    ROUTING
  ],
  providers: [CookieService, LoginService, AuthGuardService, AuthUserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
