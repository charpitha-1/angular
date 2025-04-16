import { Component } from '@angular/core';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.css']
})
export class MyTestComponent {
  showDiv:boolean=true;
  test1:boolean=true;
  newPmName:string="";
  ispresent:boolean=false;
  IndiaPmList:string[]=["modi","singh","vajpayee","lal","nehru"];
  ToggleDiv(){
    this.showDiv=!this.showDiv;
    console.log("my Toggle Function");
  }
  AddNewEntry(){
    this.ispresent=false;
    var foundString=this.IndiaPmList.find((nm)=>nm.toUpperCase()==this.newPmName.toUpperCase())
    {
      if(foundString!=undefined){
        this.ispresent=true;
      }
      else{
        this.IndiaPmList.push(this.newPmName);
      }
    }
   
  }
  RemoveItem(indx:number){
    this.IndiaPmList.splice(indx,1)
  }
}
