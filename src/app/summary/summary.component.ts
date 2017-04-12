import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() locationInfo: string;
  @Input() daySelected: string;
  @Input() howItFeelsLike: string;


  constructor() { 
    // this.locationInfo = "Laxmi Nagar, Kondapur, Hyderabad, Telangana";
  }

  ngOnInit() {
  }

}
