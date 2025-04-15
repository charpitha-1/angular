import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-main-heading',
  template: '<h2>{{headingText}}</h2>',
  styleUrls: ['./main-heading.component.css']
})
export class MainHeadingComponent {
@Input() headingText:string="List Users";
}
