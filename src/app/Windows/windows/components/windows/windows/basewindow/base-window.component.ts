import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import {DialogRef} from '@angular/cdk/dialog';
import {
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import {SettingsWindowsComponent} from '../settings/components/settings/window';
import {DirectoryComponent} from '../directory';
import {PlayerWindowComponent} from '../../player/window';

@Component({
  selector: 'win-base-window',
  templateUrl: './base-window.component.html',
  styleUrls: ['./base-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseWindowComponent implements AfterViewInit {
  constructor(
    private dialogRef: DialogRef,
    private dialog: MatDialog
  ) {}
  @Input()
  source: string;

  @Output()
  isOpenedWindow = new EventEmitter<boolean>();
  isOpened: boolean = false;
  @Input()
  folderName: string;
  @Input()
  windowClosed: boolean = true;
  @Output()
  isWindowClosed = new EventEmitter();
  @Output()
  isPlayerClose = new EventEmitter<boolean>();
  isPlayerClosed: boolean = false;
  @Output()
  isPlayerOpen = new EventEmitter<boolean>();
  isPlayerOpened: boolean = false;

  openFolder(): void {
    this.dialog
      .open(DirectoryComponent, {
        id: '123',
        minWidth: 600,
        minHeight: 600,
        maxWidth: '100vw',
        disableClose: true,
        hasBackdrop: false,
        panelClass: 'cdk-overlay-pane',
        data: {folderName: this.folderName},
      })
      .afterOpened()
      .subscribe((res) => {
        this.isOpenedWindow.emit((this.isOpened = true));
        this.isWindowClosed.emit(
          (this.windowClosed = false)
        );
      });

    this.dialog
      .getDialogById('123')
      .afterClosed()
      .subscribe((res) => {
        this.isOpenedWindow.emit((this.isOpened = false));
        this.isWindowClosed.emit(
          (this.windowClosed = true)
        );
      });
  }

  ngAfterViewInit(): void {}
  openWindow(): void {
    this.dialog
      .open(SettingsWindowsComponent, {
        id: 'set',
        minWidth: 400,
        minHeight: 400,
        width: 'auto',
        height: 'auto',
        maxHeight: '900px',
        maxWidth: '100vw',
        disableClose: true,
        hasBackdrop: false,
        panelClass: 'cdk-overlay-pane',
      })
      .afterOpened()
      .subscribe((res) => {
        this.isOpenedWindow.emit((this.isOpened = true));
        this.isWindowClosed.emit(
          (this.windowClosed = false)
        );
      });

    this.dialog
      .getDialogById('set')
      .afterClosed()
      .subscribe((res) => {
        this.isOpenedWindow.emit((this.isOpened = false));
        this.isWindowClosed.emit(
          (this.windowClosed = true)
        );
      });
  }
  openPlayer(): void {
    this.dialog
      .open(PlayerWindowComponent, {
        id: 'play',
        minWidth: 400,
        minHeight: 400,
        width: 'auto',
        height: 'auto',
        maxHeight: '900px',
        maxWidth: '100vw',
        disableClose: true,
        hasBackdrop: false,
        panelClass: 'cdk-overlay-pane',
        data: {source: this.source},
      })
      .afterOpened()
      .subscribe((res) => {
        this.isPlayerOpen.emit(
          (this.isPlayerOpened = true)
        );
        this.isPlayerClose.emit(
          (this.isPlayerClosed = false)
        );
      });

    this.dialog
      .getDialogById('play')
      .afterClosed()
      .subscribe((res) => {
        this.isPlayerOpen.emit(
          (this.isPlayerOpened = false)
        );
        this.isPlayerClose.emit(
          (this.isPlayerClosed = true)
        );
      });
  }
}
