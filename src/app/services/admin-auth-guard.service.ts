import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';
import { LOCAL_STORAGE_CONSTANTS } from '../constants/local-storage.constant';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const userModel: UserModel = this.localStorageService.get(LOCAL_STORAGE_CONSTANTS.UID_TOKEN);
    console.log('inside userModel ', userModel);
    if (userModel.role === 'ADMIN') {
      return true;
    } else {
      this.router.navigateByUrl('/home');
      return false;
    }
  }
}
