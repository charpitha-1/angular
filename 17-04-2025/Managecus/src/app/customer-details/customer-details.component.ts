import { Component } from '@angular/core';
import { CustomerData } from '../customer-data';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  custId:string="";
  custName:string="";
  loc:string="";
  CustomerEntry:CustomerData[]=[];
  OncustomerAdd(){
    if (this.custId && this.custName && this.loc){
     var temp:CustomerData={
      customerId:this.custId,
      customerName:this.custName,
      location:this.loc
    };
    this.CustomerEntry.push(temp);
  }
}
  RemoveCus(index:number){
    this.CustomerEntry.splice(index,1);
  }
  GetStyleObject(inp:string,nm:string):any{
    var obj:any;
    // if(inp=="chennai")
    // {
    //   obj={"Chennaistyle":true}
    // }
    // if(nm.startsWith('h')){
    // obj={'ChennaiStyle':true,'sStyle':true}
    // }
    if(inp=="chennai")
     {
       obj={'background-color':'aqua',"font-size":'30px','color':'black'}
     }
    return(obj);
  }
}
