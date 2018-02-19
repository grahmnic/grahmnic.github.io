import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({})
export class User {
    userID;
    userName;
    userLogin;
    password;
    userSecurity;

  constructor(userID, userName, userLogin, password, userSecurity) {
    this.userID = userID;
    this.userName = userName;
    this.userLogin = userLogin;
    this.password = password;
    this.userSecurity = userSecurity;    
  }
}