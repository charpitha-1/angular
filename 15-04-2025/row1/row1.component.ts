import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-row1',
  templateUrl: './row1.component.html',
  styleUrls: ['./row1.component.css']
})
export class Row1Component {
  @Input() row1Text:string=""
  @Input() row1sub1Value:string=""
  @Input() row1sub2Value:string=""
}
