import {Component, Inject, OnInit} from '@angular/core';
import {DialogRef} from '@angular/cdk/dialog';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'win-window',
  templateUrl: './settings-window.component.html',
  styleUrls: ['./settings-window.component.scss'],
})
export class SettingsWindowsComponent implements OnInit {
  isFullscreen: boolean;
  minimize() {
    this.dialogRef.updateSize(400, 400);
  }
  updateSize() {
    this.dialogRef.updateSize();
  }
  maximize() {
    this.dialogRef.updateSize('100vw', '700px');
  }
  close() {
    this.dialogRef.close();
  }
  enterFullscreen() {
    this.isFullscreen = true;
    if (this.elem.requestFullscreen()) {
      this.elem.requestFullscreen();
    }
  }
  exitFullscreen() {
    this.isFullscreen = false;
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }

  constructor(
    @Inject(DOCUMENT) private document: any,
    private dialogRef: DialogRef
  ) {}
  elem;
  ngOnInit() {
    this.elem = document.documentElement;
  }
}
