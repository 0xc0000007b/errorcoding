import {NgModule} from '@angular/core';
import {TreeviewModule} from './treeview';
import {ImageDirectoryModule} from './image-directory';
import {DirectoryComponent} from './directory';
import {FolderChangeModule} from './folder-change';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [DirectoryComponent],
  imports: [
    TreeviewModule,
    ImageDirectoryModule,
    FolderChangeModule,
    MatDialogModule,
  ],
  exports: [DirectoryComponent],
})
export class DirectoryModule {}
