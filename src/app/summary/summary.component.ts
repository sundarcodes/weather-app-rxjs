import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  locationInfo: string;
  daySelected: string;
  howIsCurrentWeather: string;

  constructor() { 
    this.locationInfo = "Laxmi Nagar, Kondapur, Hyderabad, Telangana";
    this.daySelected = "Friday";
    this.howIsCurrentWeather = "Partly Cloudy";
  }

  ngOnInit() {
  }

}
