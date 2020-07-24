import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserModel } from '../../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userModel: UserModel[] = [];

  constructor(private _userServices: UserService) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    // console.log('inside getUserList');
    this._userServices.getUserList().subscribe(
      (usermodel: UserModel[]) => {
        this.userModel = usermodel;
        console.log('inside usermodel ', this.userModel);
      }, (error: HttpErrorResponse) => {
        console.log('inside HttpErrorResponse is ', error);
      });
  }

}
