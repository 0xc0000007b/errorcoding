import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  ViewChild,
} from '@angular/core';

@Directive({
  selector: '[rightClick]',
})
export class AreaSelectableDirective
  implements AfterViewInit
{
  canvas: ElementRef;
  private mEvent: MouseEvent;
  private isSelected: boolean;

  @Output() rightClick = new EventEmitter();
  private isShowed: boolean = false;

  rightMouseClick() {
    this.isShowed = true;
    if (this.isShowed) {
      this.canvas.nativeElement.style.display = 'block';
      this.rightClick.emit();
    }
    if (!this.isSelected) {
      this.canvas.nativeElement.style.backgroundColor =
        '#2980b9';
      this.canvas.nativeElement.style.borderWidth = '3px';
      this.canvas.nativeElement.style.borderStyle = 'solid';
      this.canvas.nativeElement.style.borderColor =
        '#3498db';
      this.canvas.nativeElement.style.backgroundOpacity =
        '50%';
      this.isSelected = true;
    } else {
      this.canvas.nativeElement.style.backgroundColor =
        'transparent';
      this.canvas.nativeElement.style.borderWidth = 0;
      this.canvas.nativeElement.style.borderStyle =
        'transparent';
      this.canvas.nativeElement.style.borderColor =
        'transparent';
      this.canvas.nativeElement.style.backgroundOpacity =
        '%';
      this.isSelected = false;
    }
  }
  ngAfterViewInit() {
    this.rightMouseClick();
  }
}
