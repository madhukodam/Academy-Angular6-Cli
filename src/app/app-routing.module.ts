import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { LoginComponent } from './components/login/login.component';
import { BranchComponent } from './components/branch/branch.component';

const routes: Routes = [
{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent },
{ path: 'branch', component: BranchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
