import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phw-info',
  templateUrl: './phw-info.component.html',
  styleUrls: ['./phw-info.component.css']
})
export class PhwInfoComponent implements OnInit {

  precipitation: number;
  humidity: number;
  windSpeed: number;
  constructor() {
    this.precipitation = 0;
    this.humidity = 70;
    this.windSpeed = 8;
   }

  ngOnInit() {
  }

}
