import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() chartData: any
  options: any;
  constructor() { 
  }

  ngOnInit() {
    
  }

  ngOnChanges(...args: any[]) {
    if (this.chartData.temp) {
        let datePipe: DatePipe = new DatePipe('en-IN');
        this.options = {
        title : { text : '' },
        series: [
          {
            data: this.chartData.temp || []
          }
        ],
      xAxis: {
            categories: this.chartData.time.map(dateTime => datePipe.transform(dateTime, 'HH:mm'))
        },
      }
    }
  }

}
