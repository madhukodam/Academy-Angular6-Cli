import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { CreateuserComponent } from './components/user/createuser/createuser.component';
import { SearchuserComponent } from './components/user/searchuser/searchuser.component';
import { UserinfoComponent } from './components/user/userinfo/userinfo.component';
import { BranchComponent } from './components/branch/branch.component';
import { BranchService } from './services/branch.service';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './components/main/main.component';
import { AlertComponent } from './components/directives/alert.component';
import { ProgramComponent } from './components/program/program.component';
import { ProgramDisplayComponent } from './components/program-display/program-display.component';
import { ProgramTempComponent } from './components/program-temp/program-temp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    UserListComponent,
    CreateuserComponent,
    SearchuserComponent,
    UserinfoComponent,
    BranchComponent,
    MainComponent,
    AlertComponent,
    ProgramComponent,
    ProgramDisplayComponent,
    ProgramTempComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    DataTablesModule,
    NgbModule,
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    AlertService,
    BranchService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
