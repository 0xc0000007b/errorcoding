import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {DialogRef} from '@angular/cdk/dialog';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import FilesNode from '../../treeview/additional_files/interfaces/files-node.intrface';
import {NestedTreeControl} from '@angular/cdk/tree';
import {TREE_DATA} from '../../treeview/additional_files/tree_data';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'win-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  @Output()
  isWindowClosed = new EventEmitter<boolean>();
  windowClosed: boolean = false;
  nestedDataSource =
    new MatTreeNestedDataSource<FilesNode>();
  nestedNodeControl = new NestedTreeControl<FilesNode>(
    (node) => node.children
  );
  windowName: string = this.data.folderName;

  minimize() {
    this.dialogRef.updateSize(400, 400);
  }
  updateSize() {
    this.dialogRef.updateSize();
  }

  maximize() {
    this.dialogRef.updateSize('100vw', '500px');
  }
  close() {
    this.dialogRef.close();
    this.isWindowClosed.emit((this.windowClosed = true));
  }
  ngOnInit(): void {
    this.nestedDataSource.data = TREE_DATA;
  }

  constructor(
    private dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) private data
  ) {}
}
