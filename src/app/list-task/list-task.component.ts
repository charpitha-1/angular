import { Component, Input } from '@angular/core';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent {
  @Input() TaskEntry:UserInfo[]=[];
}
