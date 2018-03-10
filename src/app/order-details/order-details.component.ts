import { Component, Input } from '@angular/core';

import { Order } from '..https://api.angularbootcamp.com-types';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html'
})
export class OrderDetailsComponent {
  @Input() details: Order;
}
