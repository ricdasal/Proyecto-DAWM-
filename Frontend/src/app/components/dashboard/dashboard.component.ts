import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
  @ViewChild('form') form: ElementRef;
  @ViewChild('seachtext') input: ElementRef;

  chart0 = [];
  chart1 = [];
  chart2 = [];
  chart3 = [];

  gradientChartOptionsConfiguration = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      bodySpacing: 4,
      mode: 'nearest',
      intersect: 0,
      position: 'nearest',
      xPadding: 5,
      yPadding: 5,
      caretPadding: 5,
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          display: 1,
          ticks: {
            display: true,
          },
          gridLines: {
            zeroLineColor: 'transparent',
            drawTicks: true,
            display: true,
            drawBorder: true,
          },
        },
      ],
      xAxes: [
        {
          display: 1,
          ticks: {
            display: true,
          },
          gridLines: {
            zeroLineColor: 'transparent',
            drawTicks: true,
            display: true,
            drawBorder: true,
          },
        },
      ],
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 },
    },
  };

  constructor() {}

  ngOnInit(): void {
    this.generateChart('canvas0', 'line');
    this.generateChart('canvas1', 'line');
    this.generateChart('canvas2', 'bar');
    this.generateChart('canvas3', 'line');
  }

  generateChart(name: string, ctype: string) {
    this.chart0 = new Chart(name, {
      type: ctype,
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Envios',
            borderColor: '#f96332',
            pointBorderColor: '#000000',
            pointBackgroundColor: '#f96332',
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            borderWidth: 2,
            data: this.generateRandomArray(12),
          },
        ],
      },
      options: this.gradientChartOptionsConfiguration,
    });
  }

  generateRandomArray(n: number) {
    let resp = [];
    for (let i = 0; i < n; i++) {
      resp.push(Math.floor((Math.random() * 100) + 1));
    }
    return resp;
  }
}
