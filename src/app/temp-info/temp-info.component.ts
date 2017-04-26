import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temp-info',
  templateUrl: './temp-info.component.html',
  styleUrls: ['./temp-info.component.css']
})
export class TempInfoComponent implements OnInit {
  
  @Input() currentTemp: number;
  constructor() { 
  }

  ngOnInit() {
  }

}
