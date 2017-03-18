import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  options: any;
  constructor() { 
    this.options = {
            title : { text : '' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
  }

  ngOnInit() {
  }

}
