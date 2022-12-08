import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHiglightdirective]'
})

export class HiglightdirectiveDirective {
  @Input('color') color:any
  @Input('background') background:any
  @Input('font-weight') fontweight:any
  


  constructor(private element:ElementRef) {}
  
  @HostListener('mouseenter') onmouseenter(){
    this.element.nativeElement.style.color =this.color
    this.element.nativeElement.style['font-weight'] = this.fontweight
    this.element.nativeElement.style.background =this.background
  }

  @HostListener('mouseleave') onmouseleave(){
    this.element.nativeElement.style.color =''
    this.element.nativeElement.style['font-weight'] = ''
    this.element.nativeElement.style.background =''
  }

}
