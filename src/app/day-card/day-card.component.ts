import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.css']
})
export class DayCardComponent implements OnInit {

  @Input() dayInfo: any;
  day: string;
  // minTemp: number;
  // maxTemp: number;
  constructor() {
    this.day = 'Fri';
    // this.maxTemp = 27;
    // this.minTemp = 22;
  }

  ngOnInit() {
  }

}
