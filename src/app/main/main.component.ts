import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../providers/weather.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currentTemp: BehaviorSubject<number>;
  currentTemp$: Observable<number>;

  constructor(private _weatherService: WeatherService) {
    this.currentTemp = new BehaviorSubject(0);
    this.currentTemp$ = this.currentTemp.asObservable();
   }

  ngOnInit() {
    this._weatherService.loadWeatherInfoForCity('London')
    .subscribe( x => {
      this._weatherService.setDayToSeeWeather(new Date().getDay());
      } );

    // this._weatherService.weatherToday$
    // .subscribe(weatherInfo => {
    //   this.currentTemp.next(weatherInfo.maxTemp);
    // });
  }

}
