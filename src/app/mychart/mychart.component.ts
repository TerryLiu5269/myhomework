import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: string[] = ['近7天收支', '近7天轉入金額', '近7天轉出金額', '近7天利息'];
  public doughnutChartData: ChartData<'doughnut'> = {
    datasets: [
      { data: [350, 450, 100, 250] }
    ],
    labels: this.doughnutChartLabels
  };
  public doughnutChartType: ChartType = 'doughnut';

  public options: any = {
    labels: { position:'right' }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
