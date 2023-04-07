import {
  Directive,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[select]',
})
export class SelectDirective {
  private isSelected: boolean = false;
  @HostListener('click') OnSelect() {
    if (!this.isSelected) {
      this.el.nativeElement.style.backgroundColor =
        '#2980b9';
      this.el.nativeElement.style.borderWidth = '3px';
      this.el.nativeElement.style.borderStyle = 'solid';
      this.el.nativeElement.style.borderColor = '#3498db';
      this.el.nativeElement.style.backgroundOpacity = '50%';
      this.isSelected = true;
    } else {
      this.el.nativeElement.style.backgroundColor =
        'transparent';
      this.el.nativeElement.style.borderWidth = 0;
      this.el.nativeElement.style.borderStyle =
        'transparent';
      this.el.nativeElement.style.borderColor =
        'transparent';
      this.el.nativeElement.style.backgroundOpacity = '%';
      this.isSelected = false;
    }
  }

  constructor(private el: ElementRef) {}
}
