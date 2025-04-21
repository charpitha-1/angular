import { Component, OnInit } from '@angular/core';
import { BroadcastService } from '../broadcast.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  message:string=""
  constructor(private brSrv:BroadcastService){
  
    }
  ngOnInit(): void {
   this.brSrv.changeNotification.subscribe((val)=>{ //subscribe listen for the request or event
    
    this.message=`from linechart: chart updated with ${val}`;
   })
  }

}
