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
    .map((data: any) => data.json().list)
    .do(x => console.log(x))
  }

  public loadWeatherInfoForCity(city: string): Observable<any> {
    return this.sendRequestForCity(city)
    .do(x => console.log(x))
    .switchMap(forecastList => Observable.of(this.buildDayWiseMap(forecastList)));
  }

  buildDayWiseMap(forecastList) {
  return forecastList.reduce((acc, listing) => {
      const listingDay = new Date(listing.dt * 1000).getDay();
      if (!(listingDay in acc)) {
        acc[listingDay] = {
          dateTime: [],
          tempMin: [],
          tempMax: [],
          temp: [],
          humidity: [],
          windSpeed: [],
          howItFeelsLike: [],
          howItFeelsLikeDesc: []
        };
      }
      acc[listingDay].dateTime.push(new Date(listing.dt * 1000));
      acc[listingDay].tempMin.push(listing.main.temp_min);
      acc[listingDay].tempMax.push(listing.main.temp_max);
      acc[listingDay].temp.push(listing.main.temp);
      acc[listingDay].humidity.push(listing.main.humidity);
      acc[listingDay].windSpeed.push(listing.wind.speed);
      acc[listingDay].howItFeelsLike.push(listing.weather[0].main);
      acc[listingDay].howItFeelsLikeDesc.push(listing.weather[0].description);
      return acc;
    }, {});
  }





}
