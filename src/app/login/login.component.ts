import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;
  error = false;
  erroMessage = '';

  constructor(private _formBuilder: FormBuilder, private _loginService: LoginService) {
  }

  ngOnInit(): any {
    this.form = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSignin(): void {
    const user = {username: this.form.value.email, password: this.form.value.password};
    this._loginService
      .authenticate(user);
  }

  ngOnDestroy(): any {
    this._loginService.unsubscribe();
  }
}
