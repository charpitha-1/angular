import { Component } from '@angular/core';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  TaskEntry:UserInfo[]=[];
  OnChildEvent(msg:UserInfo){
    this.TaskEntry.push(msg);
  }
}
