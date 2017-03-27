import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {CookieService} from "angular2-cookie/core";
import {User} from "../models/user";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {UrlProvider} from "./url-provider";
import {Router} from "@angular/router";

const KEY_USER_SESSION = "USER_SESSION";

@Injectable()
export class AuthUserService {

  constructor(private _http: Http, private _cookieService: CookieService, private _router: Router) {
  }

  authenticate(user: User): Observable<void> {
    return this._http
      .post(UrlProvider.URL, user)
      .map((response: Response) => {
        if (response.ok) {
          this._setUserOnSession(response.json());
          return;
        }
      });
  }

  private _setUserOnSession(user: User): void {
    this._cookieService.putObject(KEY_USER_SESSION, user);
  }

  public getUserFromSession(): User {
    return this._cookieService.getObject(KEY_USER_SESSION) as User;
  }

  public hasUserAuthenticated(): boolean {
    return this.getUserFromSession() !== null;
  }

  public logout(): void {
    this._cookieService.remove(KEY_USER_SESSION);
    this._router.navigate(['/login']);
  }
}
