import { Component } from '@angular/core';

import { fakeApiOrderData, Order } from '../api-types';

@Component({
  selector: 'order-manager',
  templateUrl: './order-manager.component.html'
})
export class OrderManagerComponent {
  orderList: Order[];
  selectedOrder: Order;

  constructor() {
    this.orderList = fakeApiOrderData;
  }

  choose(i: number) {
    this.selectedOrder = this.orderList[i];
  }
}
