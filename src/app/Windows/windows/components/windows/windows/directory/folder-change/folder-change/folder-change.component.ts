import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'win-folder-change',
  template: `<div class="folders">
    <mat-tab-group mat-stretch-tabs class="tabs">
      <mat-tab label="OS" class="mat-label">
        <win-os-folder></win-os-folder>
      </mat-tab>
      <mat-tab label="images" class="mat-label">
        <win-images></win-images
      ></mat-tab>
    </mat-tab-group>
  </div>`,

  encapsulation: ViewEncapsulation.None,
})
export class FolderChangeComponent {}
