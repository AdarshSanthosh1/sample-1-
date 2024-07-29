import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { EditpageComponent } from './editpage/editpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserhomedashboardComponent } from './userhomedashboard/userhomedashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LogincomponentComponent,
    EditpageComponent,
    DashboardComponent,
    AddUserComponent,
    UserDashboardComponent,
    UserhomedashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
