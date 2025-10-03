import { Component, ViewChild } from '@angular/core';

import {
  NgApexchartsModule,
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexStroke,
  ApexXAxis,
  ApexYAxis,
  ApexTooltip,
  ApexFill,
  ApexOptions,
  ChartComponent
} from 'ng-apexcharts';

@Component({
  selector: 'app-total-revenue',
  imports: [NgApexchartsModule],
  templateUrl: './total-revenue.html',
  styleUrl: './total-revenue.scss'
})
export class TotalRevenue {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ApexOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Revenue',
          data: [2800, 3200, 2500, 3800, 4100, 3600, 3300, 2950, 3100, 2800, 3400, 3900]
        }
      ],
      chart: {
        type: 'area',
        height: 350,
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      xaxis: {
        categories: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
        labels: {
          style: { fontSize: '12px' }
        }
      },
      yaxis: {
        opposite: true,
        min: 0,
        max: 5000,
        tickAmount: 5, // optional → gives nice 0,1k,2k,3k,4k,5k
        labels: {
          formatter: (val: number) => (val >= 1000 ? `${val / 1000}k` : val.toString()),
          style: { fontSize: '12px' }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.6,
          opacityTo: 0,
          stops: [0, 100]
        }
      },
      colors: ['#ff6b35'],
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          const sales = [1200, 1348, 980, 1450, 1100, 900, 1020, 1125, 1300, 1250, 1400, 1350];
          const value = series[seriesIndex][dataPointIndex];

          return `
      <div style="padding:6px 10px; background:#243A73; color:#fff; border-radius:6px; font-size:13px;">
        <div>${sales[dataPointIndex].toLocaleString()} sales</div>
        <div style="font-weight:600">€ ${value.toLocaleString()}</div>
      </div>
    `;
        }
      }
    };
  }
}
