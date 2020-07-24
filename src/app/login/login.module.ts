import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../utill/shared/shared.module';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { UtillModule } from '../utill/utill.module';

const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UtillModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
