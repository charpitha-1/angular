import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMarkElement]'
})
export class MarkElementDirective implements AfterViewInit {
  @Input() appMarkElement:string="";
  @Input() refVal:boolean=false;
  @HostListener('mouseenter')OnMouseEnter(){
    this.elm.nativeElement.style.backgroundColor=this.appMarkElement;
  }
  @HostListener('mouseleave')OnMouseLeave(){
    this.elm.nativeElement.style.backgroundColor='';
  }
  constructor(private elm:ElementRef) { 
   
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  // ngAfterViewInit(): void {
  //   if(this.refVal){
  //     this.elm.nativeElement.style.backgroundColor=this.appMarkElement;
  //   }
  //   else{
  //     this.elm.nativeElement.style.backgroundColor='';
  //   }
  // }

}
