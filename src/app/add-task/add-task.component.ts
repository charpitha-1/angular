import { Component, EventEmitter, Output } from '@angular/core';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  taskId:number=0;
  taskTitle:string="";
  taskDuration:number=0;
  taskStatus:string="";
  @Output() OnTaskAddEvent:EventEmitter<UserInfo>;
  constructor(){
    this.OnTaskAddEvent=new EventEmitter();
  }
  AddTaskData(){
    this.OnTaskAddEvent.emit({taskId:this.taskId,taskTitle:this.taskTitle,taskDuration:this.taskDuration,taskStatus:this.taskStatus});
  }
}
