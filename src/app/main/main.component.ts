import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../providers/weather.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cityName: string;

  constructor(private _weatherService: WeatherService) {
   }

  ngOnInit() {
  }

  getWeather() {
    this._weatherService.loadWeatherInfoForCity(this.cityName)
    .subscribe( x => {
      this._weatherService.setDayToSeeWeather(new Date().getDay());
      } );
  }

  onDaySelected(dayNum) {
    this._weatherService.setDayToSeeWeather(dayNum);
  }

}
