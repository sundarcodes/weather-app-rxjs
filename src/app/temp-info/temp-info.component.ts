import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-info',
  templateUrl: './temp-info.component.html',
  styleUrls: ['./temp-info.component.css']
})
export class TempInfoComponent implements OnInit {
  
  currentTemp: number;
  constructor() { 
    this.currentTemp = 23;
  }

  ngOnInit() {
  }

}
