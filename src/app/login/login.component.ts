import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LOCAL_STORAGE_CONSTANTS } from '../constants/local-storage.constant';
import { LocalStorageService } from '../services/local-storage.service';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title: string = String('Login');
  userModel: UserModel = new UserModel();
  loginForm: FormGroup;
  enableSpinner: Boolean = Boolean(false);

  constructor(private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private _snackBarService: SnackbarService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'password': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required])
    });
  }

  adminUserLogin() {
    this.enableSpinner = true;
    // console.log('inside adminUserLogin');
    this.userModel = this.loginForm.getRawValue();
    this.userModel.password = btoa(this.userModel.password);
    this.authService.adminlogin(this.userModel).subscribe(
      (userModel: UserModel) => {
        this.localStorageService.set(LOCAL_STORAGE_CONSTANTS.UID_TOKEN, JSON.stringify(userModel));
        this.enableSpinner = false;
        this.router.navigate(['/home']);
      }, (error: HttpErrorResponse) => {
        // console.log('inside HttpErrorResponse is ', error);
        this._snackBarService.openSnackBar('invalid credential', '');
      });
  }





}
