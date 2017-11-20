import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: String = 'transparent';
  @Input('appBetterHighlight') highlightColor: String = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: String;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
      this.backgroundColor = this.defaultColor;
    }

}
