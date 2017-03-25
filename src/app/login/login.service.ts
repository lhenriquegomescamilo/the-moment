/**
 * Created by camilo on 25/03/17.
 */
import {Injectable} from "@angular/core";
import {AuthUserService} from "../services/auth-user.service";
import {User} from "../models/user";

@Injectable()
export class LoginService {
  constructor(private _authUserService: AuthUserService) {

  }

  authenticate(user: User): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this._authUserService
        .authenticate(user)
        .subscribe(() => {
          const hasAuthenticated: boolean = this._authUserService.hasUserAuthenticated();
          resolve(hasAuthenticated);
        }, (error: any) => {
          reject(error);
        });

    });
  }
}
