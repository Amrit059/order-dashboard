import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { Observable } from 'rxjs';
import { OrderModel } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private coreServices: CoreService) { }

  getOrderList(page: Number): Observable<OrderModel[]> {
    return this.coreServices.get('fetch/order/list', { page: page });
  }

  getOrderById(id: string): Observable<OrderModel> {
    return this.coreServices.get('fetch/order/by/id', { id: id });
  }

  createOrder(orderModel: OrderModel): Observable<OrderModel> {
    return this.coreServices.post('create/order', orderModel);
  }

  updateOrder(orderModel: OrderModel): Observable<OrderModel> {
    return this.coreServices.put('update/order', orderModel, {});
  }

  deleteOrder(id: string): Observable<String> {
    return this.coreServices.delete('delete/order', { id: id });
  }

}
