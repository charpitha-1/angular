import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-row3',
  templateUrl: './row3.component.html',
  styleUrls: ['./row3.component.css']
})
export class Row3Component {
  @Input() row3Text:string=""
}
