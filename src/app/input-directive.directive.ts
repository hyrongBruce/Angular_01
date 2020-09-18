import { Directive,ElementRef,Renderer2 } from '@angular/core';
// dif between? renderer 2 and renderer

@Directive({
  selector: 'input[appInputDirective]',
  host:{
    '(input)':'onInput($event)'
  }
  
})
export class InputDirectiveDirective {
  // using highlight example
  constructor(renderer:Renderer2,el: ElementRef) {
    renderer.setStyle(el.nativeElement,'backgroundColor','blue');
   }
  // using inputExample
  onInput(event){
    console.log(event.target.value);
  }
}
