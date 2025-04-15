import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-row2',
  templateUrl: './row2.component.html',
  styleUrls: ['./row2.component.css']
})
export class Row2Component {
  @Input() row2Text:string=""
}
