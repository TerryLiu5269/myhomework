import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent implements OnInit {

  //data的值由父元件傳下來
  @Input() doughnutChData: number[] = [350, 450, 100, 250];

  // Doughnut
  public doughnutChartLabels: string[] = ['近7天收支', '近7天轉入金額', '近7天轉出金額', '近7天利息'];
  public doughnutChartData: ChartData<'doughnut'> = {
    datasets: [
      // { data: [350, 450, 100, 250] }
      { data: this.doughnutChData }
    ],
    labels: this.doughnutChartLabels
  };
  public doughnutChartType: ChartType = 'doughnut';

  // 根本沒用==
  // public options: any = {
  //   labels: { display: 'none' }
  // }


  constructor() {

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const data = {
      datasets: [
        // { data: [350, 450, 100, 250] }
        { data: changes['doughnutChData'].currentValue }
      ],
      labels: this.doughnutChartLabels
    };
    this.doughnutChartData = data;
  }
}
