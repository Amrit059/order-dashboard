import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private coreServices: CoreService) { }

  getUserList(): Observable<UserModel[]> {
    return this.coreServices.get('fetch/user/list', {});
  }

  getUserById(id: string): Observable<UserModel> {
    return this.coreServices.get('fetch/user/by/id', { id: id });
  }

  createUser(userModel: UserModel): Observable<UserModel> {
    return this.coreServices.post('create/user', userModel);
  }

  updateUser(userModel: UserModel): Observable<UserModel> {
    return this.coreServices.put('update/user', userModel, {});
  }

}
