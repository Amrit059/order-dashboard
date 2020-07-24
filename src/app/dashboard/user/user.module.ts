import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SharedModule } from '../../utill/shared/shared.module';
import { UtillModule } from '../../utill/utill.module';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  }, {
    path: 'list',
    component: UserListComponent
  }, {
    path: 'create',
    component: UserEditComponent
  }, {
    path: 'edit/:id',
    component: UserEditComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UtillModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserListComponent, UserEditComponent],
  providers: [
    UserService
  ]
})
export class UserModule { }
