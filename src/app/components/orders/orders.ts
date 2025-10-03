// #orders.ts
import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Order, OrderStatus, VENDORS, STATUSES } from '../../theme/shared/models';
import { OrderDetails } from '../order-details/order-details';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MOCK_ORDERS } from '../../theme/shared/mock-orders'; // ✅ import

@Component({
  selector: 'app-orders',
  imports: [CommonModule, FormsModule, OrderDetails],
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', opacity: 0, overflow: 'hidden' })),
      state('expanded', style({ height: '*', opacity: 1, overflow: 'hidden' })),
      transition('collapsed <=> expanded', [animate('220ms ease')])
    ])
  ]
})
export class Orders {
  vendors = VENDORS;
  statuses = STATUSES;

  vendorSortAsc = true;
  statusSortAsc = true;

  searchTerm = signal('');
  selectedVendor = signal(this.vendors[0]);
  selectedStatus = signal<'All Status' | OrderStatus>('All Status');

  expandedId = signal<number | null>(null);

  // ✅ use imported mock data
  orders = signal<Order[]>(MOCK_ORDERS);

  pageSize = 12;
  currentPage = signal(1);

  statusClass(s: OrderStatus) {
    return s.replace(' ', '');
  }

  filtered = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    const vendor = this.selectedVendor();
    const status = this.selectedStatus();

    return this.orders().filter((o) => {
      const matchesSearch = !term || `${o.id}`.includes(term) || o.customerName.toLowerCase().includes(term);
      const matchesVendor = vendor === 'All Vendors' || o.vendor === vendor;
      const matchesStatus = status === 'All Status' || o.status === status;
      return matchesSearch && matchesVendor && matchesStatus;
    });
  });

  toggle(id: number) {
    this.expandedId.set(this.expandedId() === id ? null : id);
  }

  updateStatus(order: Order, newStatus: OrderStatus) {
    order.status = newStatus;
    this.orders.set(this.orders().map((o) => (o.id === order.id ? { ...o } : o)));
  }

  pagedOrders = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.filtered().slice(start, start + this.pageSize);
  });

  totalPages = computed(() => Math.ceil(this.filtered().length / this.pageSize));

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }

  toggleSort(type: 'vendor' | 'status') {
    if (type === 'vendor') {
      this.vendorSortAsc = !this.vendorSortAsc;
      this.orders.set(
        [...this.orders()].sort((a, b) => {
          return this.vendorSortAsc ? a.vendor.localeCompare(b.vendor) : b.vendor.localeCompare(a.vendor);
        })
      );
    } else {
      this.statusSortAsc = !this.statusSortAsc;
      this.orders.set(
        [...this.orders()].sort((a, b) => {
          return this.statusSortAsc ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status);
        })
      );
    }
  }
}
