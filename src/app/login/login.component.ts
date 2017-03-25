import {Component, Input, OnInit} from '@angular/core';
import {AuthUserService} from "../services/auth-user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  public username = '';

  @Input()
  public password = '';

  constructor(private _authService: AuthUserService, private _router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this._authService
      .authenticate({username: this.username, password: this.password})
      .subscribe(() => {
        const hasAuthenticated: boolean = this._authService.hasUserAuthenticated();
        if (hasAuthenticated) {
          this._router.navigate(['/home']);
        } else {
          this._router.navigate(['/login']);
        }
      });
  }
}
