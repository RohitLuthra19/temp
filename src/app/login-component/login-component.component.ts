import { Component, OnInit } from '@angular/core';
import {AuthenticationService, User} from '../authentication-service.service'

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  providers: [AuthenticationService],
})
export class LoginComponentComponent implements OnInit {

  public user = new User('', '');
  public errorMsg = '';

  constructor(
    private _service: AuthenticationService) { }

  login() {
    if (!this._service.login(this.user)) {
      this.errorMsg = 'Failed to login';
    }
  }

  ngOnInit() {
  }

}
