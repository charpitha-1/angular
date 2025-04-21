import { Component } from '@angular/core';
import { BroadcastService } from '../broadcast.service';

@Component({
  selector: 'app-tabular-data',
  templateUrl: './tabular-data.component.html',
  styleUrls: ['./tabular-data.component.css']
})
export class TabularDataComponent {
  inputNumber:number=0;
  message:string="";
  constructor(private brSrv:BroadcastService){

  }
  AddNumber(){
    this.message=`Tabular Form :Newly Added Number: ${this.inputNumber}`;
    this.brSrv.BroadcastMessage(this.inputNumber)
  }
}
