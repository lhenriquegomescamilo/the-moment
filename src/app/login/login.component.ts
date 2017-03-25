import {Component, OnInit} from "@angular/core";

import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error = false;
  erroMessage = '';

  constructor(private _formBuilder: FormBuilder, private _loginService: LoginService, private _router: Router) {
  }

  ngOnInit(): any {
    this.form = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSignin(): void {
    const user = {username: this.form.value.username, password: this.form.value.password};
    this._loginService
      .authenticate(user)
      .then((isAuthenticated: boolean) => {
        if (isAuthenticated) {
          this._router.navigate(['/home']);
        } else {
          this._router.navigate(['/login']);
        }
      });
  }

  o
}
