import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-row1sub2',
  templateUrl: './row1sub2.component.html',
  styleUrls: ['./row1sub2.component.css']
})
export class Row1sub2Component {
  @Input() row1sub2Text:string=""
}
