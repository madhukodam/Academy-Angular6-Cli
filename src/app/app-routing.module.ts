import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { LoginComponent } from './components/login/login.component';
import { BranchComponent } from './components/branch/branch.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { ProgramComponent } from './components/program/program.component';
import { ProgramTempComponent } from './components/program-temp/program-temp.component';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'branch', component: BranchComponent },
      { path: 'program', component: ProgramComponent },
      { path: 'program/:id', component: ProgramTempComponent },

    ]

  },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
