import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, Response, RequestOptions, Jsonp} from '@angular/http';

@Injectable()
export class DashboardServiceService {

  constructor(private _router: Router, private http: Http) {
  }

  getDashboardDetails() {
    return this.http
      .get('https://vehicollate-dev.herokuapp.com/api/admin/dashboard')
      .map(res => res.json());
  }
}
