import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Order, OrderStatus, STATUSES } from '../../theme/shared/models';

@Component({
  selector: 'app-order-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './order-details.html',
  styleUrl: './order-details.scss'
})
export class OrderDetails {
  @Input() order!: Order;
  @Output() statusChange = new EventEmitter<OrderStatus>();
  statuses = STATUSES;

  onStatusChange(newStatus: OrderStatus) {
    this.statusChange.emit(newStatus);
  }

  statusClass(s: OrderStatus) {
    return s.replace(' ', '');
  }
}
