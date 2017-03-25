import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthUserService} from "../services/auth-user.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _router: Router, private _authUserService: AuthUserService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this._authUserService.hasUserAuthenticated()) {
      return true;
    }

    this._router.navigate(['/login']);
    return false;
  }
}
