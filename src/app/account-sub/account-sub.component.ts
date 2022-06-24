import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-sub',
  templateUrl: './account-sub.component.html',
  styleUrls: ['./account-sub.component.css']
})
export class AccountSubComponent implements OnInit {
  eyesState = { icon1: true, icon2: false };
  @Input() title:string = ''


  constructor() { }

  ngOnInit(): void {
  }

  eyesChange(): void {
    // console.log(123); can work!
    this.eyesState.icon1 = !this.eyesState.icon1;
    this.eyesState.icon2 = !this.eyesState.icon2;
  }

}
