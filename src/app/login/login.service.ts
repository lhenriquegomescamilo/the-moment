/**
 * Created by camilo on 25/03/17.
 */
import {Injectable} from "@angular/core";
import {AuthUserService} from "../services/auth-user.service";
import {User} from "../models/user";
import {Router} from "@angular/router";

@Injectable()
export class LoginService {
  constructor(private _authUserService: AuthUserService, private _router: Router) {
  }

  authenticate(user: User): void {
    this._authUserService
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
}
