import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[color]',
})
export class ColorDirective {
  @Input() userColor: string;

  private defaultColor: string = 'red';
  private fontColor: string;

  constructor() {
    this.fontColor = this.defaultColor;
  }

  @HostBinding('style.color') get getFontColor() {
    return this.fontColor;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.fontColor = this.userColor;
  }
}
