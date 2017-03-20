import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../providers/weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this._weatherService.loadWeatherInfoForCity('London')
    .subscribe( x => {
      this._weatherService.setDayToSeeWeather(new Date().getDay());
      } );

    this._weatherService.weatherToday$
    .subscribe(x => console.log(x));
  }

}
