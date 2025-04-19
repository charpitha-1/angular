import { Component } from '@angular/core';
import { RestaurantInfo } from '../restaurant-info';

@Component({
  selector: 'app-manage-restaurants',
  templateUrl: './manage-restaurants.component.html',
  styleUrls: ['./manage-restaurants.component.css']
})
export class ManageRestaurantsComponent {
  restId:string="";
  restName:string="";
  restLoc:string="";
  restMinOrder:number=0;
  restdiscount:number=0;
  restStatus:boolean=false;
  restaurantArray:RestaurantInfo[]=[];
  AddRestaurant(){
    // console.log("add restaurant");
    this.restaurantArray.push({
      restId:this.restId,
      restName:this.restName,
      restLoc:this.restLoc,
      restMinOrder:200,
      restDiscount:0.12,
      restStatus:this.restStatus,
    })
    console.log(this.restaurantArray);
  }
}
