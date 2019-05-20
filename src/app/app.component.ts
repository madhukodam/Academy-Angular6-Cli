import { Component, OnInit } from '@angular/core';
import { UserDetails } from './models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Academy';
  currentUser: UserDetails;

  constructor(private router: Router) {
  }

}
