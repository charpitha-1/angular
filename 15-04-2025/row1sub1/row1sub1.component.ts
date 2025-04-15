import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-row1sub1',
  templateUrl: './row1sub1.component.html',
  styleUrls: ['./row1sub1.component.css']
})
export class Row1sub1Component {
  @Input() row1sub1Text:string=""
}
