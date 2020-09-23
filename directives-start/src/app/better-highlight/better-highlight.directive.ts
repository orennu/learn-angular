import { 
  Directive, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  Input, 
  OnInit, 
  Renderer2
 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultBgColor: string = 'blue';
  @Input() highlightBgColor: string = 'black';
  
  /* Using HostBinding decorator to change the element property (e.e style.backgroundColor).
  * Just declaring the property is overriding renderer code in line 25, to get the same behavior, either assign
  * the color value to this property or set it inside ngOnInit.
  */ 
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultBgColor;
    /*
     * setting styles using renderer
     */
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red'); // this currently has no effect
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '1em');
    this.renderer.setStyle(this.elementRef.nativeElement, 'text-align', 'center');
  }

  /*
   * setting event listener to react to events
   */
  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    // Commenting renderer code to show alertnative of manipulating the style background.
    // Both will work.
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'black');
    this.backgroundColor = this.highlightBgColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // Commenting renderer code to show alertnative of manipulating the style background.
    // Both will work.
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultBgColor;
  }

}
