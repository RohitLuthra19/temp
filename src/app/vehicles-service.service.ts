import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, Response, RequestOptions, Jsonp} from '@angular/http';

@Injectable()
export class VehiclesServiceService {

  constructor(private http: Http) { }

  getVehicles() {
    return this.http
      .get('https://vehicollate-dev.herokuapp.com/api/admin/allVehicle')
      .map(res => res.json());
  }
}
