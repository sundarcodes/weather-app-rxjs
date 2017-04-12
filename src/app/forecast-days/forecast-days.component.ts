import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-days',
  templateUrl: './forecast-days.component.html',
  styleUrls: ['./forecast-days.component.css']
})
export class ForecastDaysComponent implements OnInit {

  @Input() daysList: any;

  constructor() { }

  ngOnInit() {
    console.log(this.daysList);
  }

}
