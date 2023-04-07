import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'win-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent {
  @Input()
  source: string;
  currTime: number;
  index = 4;

  paused: boolean = true;
  get icon(): string {
    return this.paused ? '\u23F5' : '\u23F8';
  }
  toggleState() {
    this.paused = !this.paused;
  }
  turnUp() {
    this.currTime += 1;
  }

  turnDown() {
    this.currTime -= 1;
  }
}
