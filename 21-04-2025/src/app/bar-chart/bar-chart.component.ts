import { Component, OnInit } from '@angular/core';
import { BroadcastService } from '../broadcast.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
 message:string=""
  constructor(private brSrv:BroadcastService){
  
    }
  ngOnInit(): void {
   this.brSrv.changeNotification.subscribe((val)=>{ //subscribe listen for the request or event
    
    this.message=`from barchart: chart updated with ${val}`;
   })
  }

}
