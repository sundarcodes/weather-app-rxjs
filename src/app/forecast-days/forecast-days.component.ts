import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forecast-days',
  templateUrl: './forecast-days.component.html',
  styleUrls: ['./forecast-days.component.css']
})
export class ForecastDaysComponent implements OnInit {

  @Input() daysList: any;
  @Output() daySelected: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDaySelected(dayNum) {
    this.daySelected.emit(dayNum);
  }

}
