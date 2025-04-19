import { Component, Input } from '@angular/core';
import { RestaurantInfo } from '../restaurant-info';

@Component({
  selector: 'app-rastaurant-list',
  templateUrl: './rastaurant-list.component.html',
  styleUrls: ['./rastaurant-list.component.css']
})
export class RastaurantListComponent {
  @Input() RestaurantData:RestaurantInfo[]=[];
}
