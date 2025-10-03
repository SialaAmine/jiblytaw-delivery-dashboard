import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule, ApexOptions } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
import { MOCK_ORDERS } from '../../../mock-orders';

@Component({
  selector: 'app-chart-average-order-value',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './chart-average-order-value.html',
  styleUrl: './chart-average-order-value.scss'
})
export class ChartAverageOrderValue implements OnInit {
  chartOptions!: Partial<ApexOptions>;
  averageValue: number = 0;
  days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  ngOnInit() {
    // group orders by weekday
    const grouped: { [key: number]: number[] } = {};
    MOCK_ORDERS.forEach((order) => {
      const day = new Date(order.createdAt).getDay(); // 0=Sun ... 6=Sat
      const index = day === 0 ? 6 : day - 1; // shift so Monday=0
      if (!grouped[index]) grouped[index] = [];
      grouped[index].push(order.totalPrice);
    });

    const averages = this.days.map((_, i) => {
      const arr = grouped[i] || [];
      return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
    });

    // compute overall average
    const allValues = Object.values(grouped).flat();
    this.averageValue = allValues.reduce((a, b) => a + b, 0) / allValues.length;

    this.chartOptions = {
      chart: {
        type: 'area',
        height: 220,
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      stroke: {
        curve: 'straight',
        width: 3,
        colors: ['#ff6b35'] // bright orange stroke
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.8,
          opacityTo: 0,
          stops: [0, 100]
        },
        colors: ['#ff6b35']
      },
      colors: ['#ff6b35'],
      dataLabels: { enabled: false },
      series: [{ name: 'Avg Value', data: averages }],
      xaxis: {
        categories: this.days,
        labels: {
          style: {
            colors: '#374151',
            fontWeight: 500
          }
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        min: Math.floor(Math.min(...averages)) - 2,
        max: Math.ceil(Math.max(...averages)) + 2,
        tickAmount: 4,
        labels: {
          formatter: (val) => val.toFixed(0),
          style: { colors: '#6B7280', fontWeight: 500 }
        }
      },
      grid: {
        borderColor: '#E5E7EB',
        strokeDashArray: 3
      },

      tooltip: {
        custom: ({ series, seriesIndex, dataPointIndex }) => {
          const value = series[seriesIndex][dataPointIndex];
          return `
            <div style="
              padding:8px 12px;
              background:#243A73;
              color:#fff;
              border-radius:8px;
              font-size:13px;
              box-shadow:0 2px 6px rgba(0,0,0,0.2);
              text-align:center;
            ">
              <div style="opacity:0.8; font-size:12px;">Average</div>
              <div style="font-weight:600; font-size:14px;">€ ${value.toFixed(1)}</div>
            </div>
          `;
        }
      }
    };
  }
}
