import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  locationInfo: string;
  daySelected: string;
  @Input() howItFeelsLike: Observable<string>;

  constructor() { 
    this.locationInfo = "Laxmi Nagar, Kondapur, Hyderabad, Telangana";
    this.daySelected = "Friday";
    // this.howIsCurrentWeather = "Partly Cloudy";
  }

  ngOnInit() {
  }

}
