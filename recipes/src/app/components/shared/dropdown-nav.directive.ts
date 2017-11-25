import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdownNav]'
})
export class DropdownNavDirective {
    @HostBinding('class.collapsed') isClosed = true;

    constructor (private el: ElementRef, private renderer: Renderer2) {}

    @HostListener('click') toggleOpen() {
        this.isClosed = !this.isClosed;
        const part = this.el.nativeElement.parentNode.querySelector('.navbar-toggler');
        const part2 = this.el.nativeElement.parentNode.querySelector('.navbar-collapse');
        if (this.isClosed) {
            this.renderer.addClass(part, 'collapsed');
            this.renderer.removeClass(part2, 'show');
        } else {
            this.renderer.removeClass(part, 'collapsed');
            this.renderer.addClass(part2, 'show');
        }
    }

}