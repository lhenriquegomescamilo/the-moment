import {Component, OnInit} from '@angular/core';
import {AuthUserService} from "../services/auth-user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _authUserService: AuthUserService) {
  }

  ngOnInit() {
  }

  isAuth(): boolean {
    return this._authUserService.hasUserAuthenticated();
  }

  onLogout(): void {
    this._authUserService.logout();
  }

}
