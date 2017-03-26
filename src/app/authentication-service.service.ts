import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, Response, RequestOptions, Jsonp} from '@angular/http';

export class User {
  constructor(
    public userEmail: string,
    public password: string) { }
}

var users = [
  new User('admin@admin.com', 'adm9'),
  new User('user1@gmail.com', 'a23')
];

@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router, private http: Http) { }


  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  login(user) {
    var body = 'userEmail=' + user.userEmail + '&password=' + user.password;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http
      .post('https://vehicollate-dev.herokuapp.com/api/admin/login',
      body, {
        headers: headers
      })
      .subscribe(data => {
        if (data.json().success) {
          var authenticatedUser = data.json().userInfo;
          console.log(authenticatedUser);
          localStorage.setItem("user", authenticatedUser.userEmail);
          this._router.navigate(['private']);
          return true;
        } else {
          data.json();
        }
      }, error => {
        //console.log(JSON.stringify(error.json()));
        return false;
      });
  }

  checkCredentials() {
    if (localStorage.getItem("user") === null) {
      this._router.navigate(['login']);
    }
  }
}
