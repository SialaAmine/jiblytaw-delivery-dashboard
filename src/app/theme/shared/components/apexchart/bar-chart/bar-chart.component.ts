import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgApexchartsModule, ChartComponent, ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-bar-chart',
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements OnInit {
  // public props
  @ViewChild('chart') chart!: ChartComponent;
  chartOptions!: Partial<ApexOptions>;
  @Input() title!: string;
  @Input() value!: number;
  @Input() percent!: number;

  trendClass!: string;
  trendIcon!: string;

  // life cycle event
  ngOnInit() {
    if (this.percent >= 0) {
      this.trendClass = 'text-green';
      this.trendIcon = 'ti ti-arrow-up-right';
    } else {
      this.trendClass = 'text-red';
      this.trendIcon = 'ti ti-arrow-down-right';
    }
    this.chartOptions = {
      chart: {
        type: 'area',
        height: 80,

        sparkline: { enabled: true }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.6,
          opacityTo: 0.05,
          stops: [0, 100]
        }
      },
      colors: ['#ff5722'], // orange line
      dataLabels: { enabled: false },
      series: [
        {
          name: 'Orders',
          data: [15, 22, 18, 30, 25, 28, 24, 29, 32, 28]
        }
      ],
      tooltip: {
        enabled: false
      }
    };
  }
}
