import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../../services/user.service';
import { UserModel } from '../../../models/user.model';
import { FormGroup, FormControl } from '@angular/forms';
import { APP_CONSTANT } from '../../../constants/app.constant';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  title: string = String('User Edit');
  userId: string;
  modelType: string;
  userForm: FormGroup;
  userModel: UserModel = new UserModel();
  userTypes = APP_CONSTANT.USER_TYPE;

  constructor(
    private route: ActivatedRoute,
    private _userServices: UserService,
    private router: Router,
  ) {
    this.route.params.subscribe(
      (params: Params) => {
        this.userId = params.id;
      });
    if (this.userId) {
      this.modelType = 'EDIT';
      this.title = String('User Edit');
      this.getUserById(this.userId);
    } else {
      this.modelType = 'CREATE';
      this.title = String('User Create');
      this.userModel = new UserModel();
      this.createUserForm();
    }
  }

  ngOnInit() {
  }

  getUserById(id: string) {
    this._userServices.getUserById(id).subscribe(
      (usermodel: UserModel) => {
        console.log('inside usermodel ', usermodel);
        this.userModel = usermodel;
        this.createUserForm();
      }, (error: HttpErrorResponse) => {
        console.log('inside HttpErrorResponse is ', error);
      });
  }

  createUserForm() {
    this.userForm = new FormGroup({
      '_id': new FormControl(this.userModel._id),
      'fullName': new FormControl(this.userModel.fullName),
      'email': new FormControl(this.userModel.email),
      'isActive': new FormControl(this.userModel.isActive),
      'role': new FormControl(this.userModel.role),
      'password': new FormControl(this.userModel.password),
    });
  }

  userEdit() {
    // console.log('inside userEdit');
    this.userModel = this.userForm.getRawValue();
    // console.log('final user model data is ', this.userModel);
    this._userServices.updateUser(this.userModel).subscribe(
      (usermodel: UserModel) => {
        this.router.navigate(['/dashboard/users']);
        // console.log('inside usermodel ', usermodel);
      }, (error: HttpErrorResponse) => {
        console.log('inside HttpErrorResponse is ', error);
      });
  }

}
