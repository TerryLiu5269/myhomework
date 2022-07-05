import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-board',
  templateUrl: './list-board.component.html',
  styleUrls: ['./list-board.component.css']
})
export class ListBoardComponent implements OnInit {
  dateSrc: { date: string, detail: string, money: number }[] = [];

  status: boolean = true;

  doughnutData: number[] = [350, 450, 100, 250]

  constructor() { }

  ngOnInit(): void {
    this.dateSrc = this.getDateSrc().filter(e => {
      let myDay = new Date('06/19')
      return myDay.getTime() - new Date(e.date).getTime() <= 86400000 * 7
    });
    //一天的差距86400000
  }

  getDateSrc() {
    return [
      { date: '06/19', detail: '手續費', money: -15 },
      { date: '06/19', detail: '委帶入', money: 1500 },
      { date: '06/17', detail: '轉帳存', money: 1500 },
      { date: '06/16', detail: '現金提', money: -3000 },
      { date: '06/16', detail: '現金提', money: -5000 },
      { date: '06/16', detail: '手續費', money: -15 },
      { date: '06/15', detail: '現金提', money: -1500 },
      { date: '06/14', detail: '轉帳存', money: 55000 },
      { date: '06/13', detail: '手續費', money: -15 },
      { date: '06/03', detail: '委帶入', money: 20000 },
      { date: '06/01', detail: '申購扣', money: -20000 },
      { date: '05/31', detail: '轉帳存', money: 15000 },
      { date: '05/26', detail: '現金提', money: -3000 },
      { date: '05/25', detail: '現金提', money: -5000 },
      { date: '05/25', detail: '手續費', money: -15 },
      { date: '05/24', detail: '手續費', money: -15 },
      { date: '05/24', detail: '轉帳存', money: 8000 },
      { date: '05/23', detail: '手續費', money: -15 },
      { date: '05/21', detail: '現金提', money: -1000 },
    ]
  }

  getDataChange(el: number) {
    const data = this.getDateSrc();
    this.dateSrc = data.filter(e => {
      let myDay = new Date('06/19')
      return myDay.getTime() - new Date(e.date).getTime() <= 86400000 * el
    })
  }

  clickEvent() {
    this.status = !this.status;
  }

  get7day(){
    this.doughnutData = [350, 450, 100, 250]
    console.log('get7day====>',this.doughnutData)
  }
  get28day(){
    this.doughnutData = [1650, 250, 2250, 250]
    console.log('get28day====>',this.doughnutData)
  }

}
