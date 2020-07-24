import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrderModel } from 'src/app/models/order.model';
import { HttpErrorResponse } from '@angular/common/http';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;
  orderModel: OrderModel = new OrderModel();

  constructor(private _orderService: OrderService,
    private router: Router) { }

  ngOnInit() {
  this.createOrderForm();
  }

  createOrderForm() {
    this.orderForm = new FormGroup({
      '_id': new FormControl(),
      'CustomerID': new FormControl(),
      'ShipName': new FormControl(),
      'ShipAddress': new FormControl(),
      'ShipCity': new FormControl(),
      'ShipRegion': new FormControl(),
      'ShipPostalCode': new FormControl(),
      'ShipCountry': new FormControl(),
      'EmployeeID': new FormControl(),
      'ShipVia': new FormControl(),
      'Freight': new FormControl(),
      'RequiredDate': new FormControl(),
      'ShippedDate': new FormControl(),
      'ProductID': new FormControl(),
      'UnitPrice': new FormControl(),
      'Quantity': new FormControl(),
      'Discount': new FormControl(),
    });
  }

  createOrder() {
    this.orderModel = this.orderForm.getRawValue();
    console.log('final order model data is ', this.orderModel);
    this._orderService.createOrder(this.orderModel).subscribe(
      (ordermodel: OrderModel) => {
        this.router.navigate(['/dashboard/order']);
        console.log('inside ordermodel ', ordermodel);
      }, (error: HttpErrorResponse) => {
        console.log('inside HttpErrorResponse is ', error);
      });
  }

}

