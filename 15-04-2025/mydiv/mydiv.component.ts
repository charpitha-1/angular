import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-mydiv',
  templateUrl: './mydiv.component.html',
  styleUrls: ['./mydiv.component.css']
})
export class MydivComponent {
  @Input() Contentd:string=""
  @Input() row1Value:string=""
  @Input() row2Value:string=""
  @Input() row3Value:string=""
}
