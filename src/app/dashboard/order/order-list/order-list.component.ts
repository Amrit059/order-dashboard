import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderModel } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderModel: OrderModel[] = [];
  page: Number = Number(1);

  constructor(private _orderServices: OrderService) { }

  ngOnInit() {
    this.getUserList(this.page);
  }

  getUserList(page: Number) {
    // console.log('inside getUserList');
    this._orderServices.getOrderList(page).subscribe(
      (ordermodel: OrderModel[]) => {
        this.orderModel = ordermodel;
        // console.log('inside ordermodel ', this.orderModel);
      }, (error: HttpErrorResponse) => {
        console.log('inside HttpErrorResponse is ', error);
      });
  }

  previousPage() {
    this.page = Number(this.page) > 1 ? Number(this.page) - 1 : this.page;
    this.getUserList(this.page);

  }

  nextPage() {
    this.page = Number(this.page) + 1;
    this.getUserList(this.page);
  }

  cancelOrder(id: any) {
    // console.log('inside cancelOrder ', id);
    this._orderServices.deleteOrder(id).subscribe(
      (data: string) => {
        // console.log('inside data ', data);
      }, (error: HttpErrorResponse) => {
        console.log('inside HttpErrorResponse is ', error);
      });
  }
}
