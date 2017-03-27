/**
 * Created by camilo on 25/03/17.
 */
import {Injectable} from "@angular/core";
import {AuthUserService} from "../services/auth-user.service";
import {User} from "../models/user";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class LoginService {
  private _subscriptor: Subscription;
  constructor(private _authUserService: AuthUserService, private _router: Router) {
  }

  authenticate(user: User): void {
    this._subscriptor = this._authUserService
      .authenticate(user)
      .subscribe(() => {
        const isAuthenticated: boolean = this._authUserService.hasUserAuthenticated();
        if (isAuthenticated) {
          this._router.navigate(['/home']);
        } else {
          this._router.navigate(['/login']);
        }
      });
  }

  unsubscribe(): void {
    this._subscriptor.unsubscribe();
  }
}
