import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../utill/shared/shared.module';
import { UtillModule } from '../../utill/utill.module';

const routes: Routes = [
  {
    path: '',
    component: OrderListComponent
  }, {
    path: 'list',
    component: OrderListComponent
  }, {
    path: 'create',
    component: OrderComponent
  }, {
    path: 'edit/:id',
    component: OrderComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UtillModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderComponent, OrderListComponent],
  providers: [
  ]
})

export class OrderModule { }
