import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.css']
})
export class DayCardComponent implements OnInit {

  day: string;
  minTemp: number;
  maxTemp: number;
  constructor() {
    this.day = 'Fri';
    this.maxTemp = 27;
    this.minTemp = 22;
  }

  ngOnInit() {
  }

}
