import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.css']
})
export class DayCardComponent implements OnInit {

  @Input() dayInfo: any;
  @Output() daySelected: EventEmitter<number> = new EventEmitter(); 
  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.daySelected.emit(new Date(this.dayInfo.dateTime[0]).getDay());
  }

}
