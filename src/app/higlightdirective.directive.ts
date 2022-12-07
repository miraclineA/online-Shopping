import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHiglightdirective]'
})
export class HiglightdirectiveDirective {

  constructor(private element:ElementRef) {}
  
  @HostListener('mouseenter') onmouseenter(){
    this.element.nativeElement.style.color ='red'
    this.element.nativeElement.style['font-weight'] = 'bold'
  }

  @HostListener('mouseleave') onmouseleave(){
    this.element.nativeElement.style.color =''
    this.element.nativeElement.style['font-weight'] = ''
  }

}
