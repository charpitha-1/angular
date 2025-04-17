import { Component } from '@angular/core';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component {
  taskId:number=0;
  taskTitle:string="";
  taskDuration:number=0;
  taskStatus:string="";
  TaskData:UserInfo[]=[];
  AddTaskData(){
    this.TaskData.push({taskId:this.taskId,taskTitle:this.taskTitle,taskDuration:this.taskDuration,taskStatus:this.taskStatus});
  }
}
