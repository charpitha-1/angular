import { ElementRef, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myStatus'
})
export class MyStatusPipe implements PipeTransform {
  constructor(private elm:ElementRef){
    
  }
  transform(value: unknown, ...args: unknown[]): string {
    //this.elm.nativeElement.style.backgroungColor='aqua';
    if(value==true)
      return 'ACTIVE'
    else
        return 'INACTIVE';
  }

}
