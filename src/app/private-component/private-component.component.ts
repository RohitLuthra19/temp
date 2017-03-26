import { Component, OnInit } from '@angular/core';
import { AuthenticationService, User} from '../authentication-service.service';
import { DashboardServiceService} from '../dashboard-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './private-component.component.html',
  styleUrls: ['./private-component.component.css'],
  providers: [AuthenticationService, DashboardServiceService],
})
export class PrivateComponentComponent implements OnInit {

  public users = 0;
  public vehicles = 0;
  public messages = 0;

  notificationTypes = [
    { value: 'annoucements', viewValue: 'Annoucements' },
    { value: 'trafficalerts', viewValue: 'Traffic Alerts' },
    { value: 'rules', viewValue: 'Rules & Regulations' }
  ];

  constructor(private authservice: AuthenticationService, private dashboardservice: DashboardServiceService) { }

  ngOnInit() {
    this.authservice.checkCredentials();
    let details = this.dashboardservice.getDashboardDetails()
    details.subscribe(data => {
      console.log(data)
      this.users = data.users;
      this.vehicles = data.vehicles;
      this.messages = data.messages;
    });
  }

  logout() {
    this.authservice.logout();
  }

}
