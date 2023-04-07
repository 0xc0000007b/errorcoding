import {NgModule} from '@angular/core';
import {FolderChangeComponent} from './folder-change';
import {OsFolderComponent} from './os-folder-view';

import {MatTabsModule} from '@angular/material/tabs';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule, NgIf} from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
import {ImageDirectoryModule} from '../image-directory';

@NgModule({
  declarations: [FolderChangeComponent, OsFolderComponent],
  exports: [FolderChangeComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    NgIf,
    HttpClientModule,
    ImageDirectoryModule,
  ],
})
export class FolderChangeModule {}
