import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-board',
  templateUrl: './account-board.component.html',
  styleUrls: ['./account-board.component.css']
})
export class AccountBoardComponent implements OnInit {

  accountTW:string = "台幣帳戶"
  allAccount:[string,string] =["外幣帳戶","數位帳戶"]

  eyesState = { icon1: true, icon2: false };
  showMoneyState = {open: true, close: false};

  constructor() { }

  ngOnInit(): void {
  }

  eyesChange(): void {
    // console.log(123); can work!
    this.eyesState.icon1 = !this.eyesState.icon1;
    this.eyesState.icon2 = !this.eyesState.icon2;
    this.showMoneyState.open = !this.showMoneyState.open;
    this.showMoneyState.close = !this.showMoneyState.close;
  }

}
