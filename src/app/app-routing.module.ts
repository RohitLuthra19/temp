import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponentComponent } from './login-component/login-component.component'
import { PrivateComponentComponent } from './private-component/private-component.component'
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NotificationComponentComponent } from './notification-component/notification-component.component'
import { VehiclesComponentComponent } from './vehicles-component/vehicles-component.component'

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'private', component: PrivateComponentComponent },
  { path: 'login', component: LoginComponentComponent },
  //{ path: 'dashboard', component: DashboardComponentComponent },
  { path: 'notifications', component: NotificationComponentComponent },
  { path: 'vehicles', component: VehiclesComponentComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ],
  //providers: []
})
export class AppRoutingModule { }
