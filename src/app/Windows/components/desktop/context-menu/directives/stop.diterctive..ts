import {Directive, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[stop]',
})
export class StopDiterctive implements OnInit {
  @Input()
  event: MouseEvent;
  ngOnInit() {
    this.event.stopPropagation();
  }
}
