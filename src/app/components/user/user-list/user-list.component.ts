import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Observable<UserDetails[]>;
  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.reloadData();
  }


  reloadData() {
    this.users = this.userservice.getUsersList();

  }
}
