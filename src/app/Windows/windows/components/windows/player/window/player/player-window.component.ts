import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {DialogRef} from '@angular/cdk/dialog';

@Component({
  selector: 'win-play-window',
  styleUrls: ['./player-window.component.scss'],
  templateUrl: './player-window.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerWindowComponent {
  music: string =
    'assets/videos/system-of-a-down-toxicity-official-hd-video_(VIDEOMIN.ORG).mp4';

  constructor(private dialogRef: DialogRef) {}

  minimize() {
    this.dialogRef.updateSize(400, 400);
  }

  maximize() {
    this.dialogRef.updateSize('100vw', '700px');
  }
  close() {
    this.dialogRef.close();
  }
}
