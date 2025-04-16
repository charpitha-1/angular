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
    this.custId = "";
    this.custName = "";
    this.loc = "";
  }
}
  RemoveCus(index:number){
    this.CustomerEntry.splice(index,1);
  }
}
