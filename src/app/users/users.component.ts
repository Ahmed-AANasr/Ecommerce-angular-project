import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList:any[] = [];

  constructor(private userServices:UserService) { 
    this.userServices.getAllUsers().subscribe(e=>{
      this.userList = e;
    });
  }

  ngOnInit(): void {
  }

}
