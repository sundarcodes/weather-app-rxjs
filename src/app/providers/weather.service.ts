import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable, BehaviorSubject } from 'rxjs';

import { WeatherToday } from '../models/current-weather.model';

@Injectable()
export class WeatherService {

  private baseUrl: string;
  private weatherTodaySub : BehaviorSubject<WeatherToday>;
  private weatherToday: WeatherToday;
  public weatherToday$: Observable<WeatherToday>;
  private dayWiseMap: any;

  constructor(private _http: Http) {
    this.baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?appid=27d43832d2a4adcb97fcbfa23db130aa&q=London,us';
    this.weatherToday = new WeatherToday();
    this.weatherTodaySub = new BehaviorSubject(this.weatherToday);
    this.weatherToday$ = this.weatherTodaySub.asObservable();
  }

  sendRequestForCity(city: string): Observable<any> {
    const completeURL: string = this.baseUrl + city;
    return this._http.get(completeURL)
    .do(x => console.log(x))
    .map((data: any) => data.list);
  }

  loadWeatherInfoForCity(city: string): Observable<any> {
    return this.sendRequestForCity(city)
    .switchMap(forecastList => this.buildDayWiseMap(forecastList));
  }

  buildDayWiseMap(forecastList) {
    return [];
  }





}
