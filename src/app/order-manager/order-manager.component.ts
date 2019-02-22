import { Component } from '@angular/core';

import { Order, fakeApiOrderData } from '../api-types';

@Component({
  selector: 'order-manager',
  templateUrl: './order-manager.component.html'
})
export class OrderManagerComponent {
  orderList: Order[] = fakeApiOrderData;
  selectedOrder: Order | undefined;

  choose(i: number) {
    this.selectedOrder = this.orderList[i];
  }
}
