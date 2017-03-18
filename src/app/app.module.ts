import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SummaryComponent } from './summary/summary.component';
import { TempInfoComponent } from './temp-info/temp-info.component';
import { PhwInfoComponent } from './phw-info/phw-info.component';
import { ChartComponent } from './chart/chart.component';
import { ForecastDaysComponent } from './forecast-days/forecast-days.component';
import { DayCardComponent } from './day-card/day-card.component';

import { ChartModule } from 'angular2-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SummaryComponent,
    TempInfoComponent,
    PhwInfoComponent,
    ChartComponent,
    ForecastDaysComponent,
    DayCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule.forRoot(require('highcharts'))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
