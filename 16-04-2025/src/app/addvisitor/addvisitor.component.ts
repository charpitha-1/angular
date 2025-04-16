import { Component } from '@angular/core';
import { VisitorEntry } from '../visitor-entry';

@Component({
  selector: 'app-addvisitor',
  templateUrl: './addvisitor.component.html',
  styleUrls: ['./addvisitor.component.css']
})
export class AddvisitorComponent {
  visName:string="";
  visId:string="";
  visHost:string="";
  numChars:number=40;
  visitorData:VisitorEntry[]=[];
  OnUserKeyUp(){
    this.numChars=40-this.visName.length;
  }
  OnvisitorAdd(){
    console.log("new visitor");
     var temp:VisitorEntry={
      visitorId:this.visId,
      visitorName:this.visName,
      visitorHost:this.visHost
    };
    this.visitorData.push(temp);
    console.log(this.visitorData);
  }
}
