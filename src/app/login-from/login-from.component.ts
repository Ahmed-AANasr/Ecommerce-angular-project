import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from './../_model/iuser';

@Component({
  selector: 'app-login-from',
  templateUrl: './login-from.component.html',
  styleUrls: ['./login-from.component.css']
})
export class LoginFromComponent implements OnInit {
  
  user:IUser = {userName:'',passWord:''};
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loginSucess(){
    this.router.navigate(['productList'])
  }

}
