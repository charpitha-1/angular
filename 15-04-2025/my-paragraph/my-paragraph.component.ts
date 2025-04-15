import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-my-paragraph',
  templateUrl: './my-paragraph.component.html',
  styleUrls: ['./my-paragraph.component.css']
})
export class MyParagraphComponent {
  @Input() Content:string=""
  @Input() mainHeadingValue:string=""
  @Input() subHeadingValue:string=""
}
