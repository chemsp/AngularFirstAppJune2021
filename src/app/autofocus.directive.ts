import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'

})
export class AutofocusDirective {


  constructor(private renderer: Renderer2, private el: ElementRef) {
    debugger
    let stylevalue = '2px solid  blue';
    this.renderer.setStyle(this.el.nativeElement, 'border', stylevalue);
    let element = this.renderer.selectRootElement(this.el.nativeElement);
    debugger;
    element.focus();
  }



}
