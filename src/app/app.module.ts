import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { Router } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module';
import { LoginComponentComponent } from './login-component/login-component.component';
import { PrivateComponentComponent } from './private-component/private-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NotificationComponentComponent } from './notification-component/notification-component.component';
import { VehiclesComponentComponent } from './vehicles-component/vehicles-component.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    PrivateComponentComponent,
    DashboardComponentComponent,
    NotificationComponentComponent,
    VehiclesComponentComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent] //,ToolbarComponent
})
export class AppModule { }
