import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[outside]',
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter();
  @HostListener('document:click', ['$event.target'])
  onClick(target: any) {
    const clickedInside =
      this.element.nativeElement.contains(target);
    if (!clickedInside) this.clickOutside.emit(target);
  }
  constructor(private element: ElementRef) {}
}
