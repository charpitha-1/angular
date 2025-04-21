import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {
  changeNotification:Subject<number>=new Subject<number>();
  constructor() { }
  BroadcastMessage(inpNum:number){
    this.changeNotification.next(inpNum);
  }
}
