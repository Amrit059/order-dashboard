import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'users',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
      }, {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
      }
    ]
  }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent],
  // providers:[AdminAuthGuardService]
  // exports: [RouterModule]
})

export class DashboardModule { }
