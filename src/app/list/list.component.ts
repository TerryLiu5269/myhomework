import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() data = {date: '',detail: '', money: 0};

  constructor() { }

  ngOnInit(): void {
  }

}
