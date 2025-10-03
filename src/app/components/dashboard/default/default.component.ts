// Angular Import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { BarChartComponent } from 'src/app/theme/shared/components/apexchart/bar-chart/bar-chart.component';
import { TotalRevenue } from 'src/app/theme/shared/components/apexchart/total-revenue/total-revenue';
import { ChartAverageOrderValue } from 'src/app/theme/shared/components/apexchart/chart-average-order-value/chart-average-order-value';

@Component({
  selector: 'app-default',
  imports: [BarChartComponent, SharedModule, TotalRevenue, ChartAverageOrderValue],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  activeTab: 'online' | 'offline' = 'online';

  deliveryAgents = [
    {
      name: 'San Tung',
      avatar: 'assets/images/user/avatar-2.jpg',
      status: 'Active & Delivering',
      statusColor: 'text-success',
      dotColor: 'bg-success',
      online: true
    },
    {
      name: 'Fog Harbor Fish House',
      avatar: 'assets/images/user/avatar-1.jpg',
      status: 'Waiting for Orders',
      statusColor: 'text-warning',
      dotColor: 'bg-warning',
      online: true
    },
    {
      name: 'Hog Island Oyster',
      avatar: 'assets/images/user/avatar-3.jpg',
      status: 'Active & Delivering',
      statusColor: 'text-success',
      dotColor: 'bg-success',
      online: true
    },
    {
      name: 'Marufuku Ramen',
      avatar: 'assets/images/user/avatar-3.jpg',
      status: 'Active & Delivering',
      statusColor: 'text-success',
      dotColor: 'bg-success',
      online: true
    },
    {
      name: 'House of Prime Rib',
      avatar: 'assets/images/user/avatar-2.jpg',
      status: 'Waiting for Orders',
      statusColor: 'text-warning',
      dotColor: 'bg-warning',
      online: true
    },
    {
      name: 'Brenda’s French Soul Food',
      avatar: 'assets/images/user/avatar-1.jpg',
      status: 'Active & Delivering',
      statusColor: 'text-success',
      dotColor: 'bg-success',
      online: true
    },
    {
      name: 'Burma Superstar',
      avatar: 'assets/images/user/avatar-1.jpg',
      status: 'Active & Delivering',
      statusColor: 'text-success',
      dotColor: 'bg-success',
      online: true
    },
    {
      name: 'Tartine Bakery',
      avatar: 'assets/images/user/avatar-3.jpg',
      status: 'Active & Delivering',
      statusColor: 'text-success',
      dotColor: 'bg-success',
      online: true
    }
  ];

  get filteredAgents() {
    return this.deliveryAgents.filter((a) => (this.activeTab === 'online' ? a.online : !a.online));
  }

  setTab(tab: 'online' | 'offline') {
    this.activeTab = tab;
  }
}
