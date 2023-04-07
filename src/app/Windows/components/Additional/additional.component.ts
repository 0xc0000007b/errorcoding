import {Component, OnInit} from '@angular/core';
import {Dialog} from '@angular/cdk/dialog';
import {Router} from '@angular/router';
import {ExitWindowComponent} from './exit-window/exit-window.component';

@Component({
  selector: '',
  template: `<mat-dialog-actions></mat-dialog-actions>`,
})
export class AdditionalComponent implements OnInit {
  constructor(
    private dialog: Dialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dialog.open(ExitWindowComponent, {
      width: '100%',
      height: '100%',
      panelClass: '.cdk-overlay-pane',
    });
  }
}
