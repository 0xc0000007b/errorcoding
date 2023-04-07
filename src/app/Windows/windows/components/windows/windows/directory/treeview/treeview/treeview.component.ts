import {Component, Input} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import FilesNode from '../additional_files/interfaces/files-node.intrface';
import {NestedTreeControl} from '@angular/cdk/tree';

@Component({
  selector: 'win-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss'],
})
export class TreeviewComponent {
  @Input()
  dataSource: MatTreeNestedDataSource<FilesNode>;
  @Input()
  dataControl: NestedTreeControl<FilesNode>;

  hasNestedChild(index: number, node: FilesNode) {
    return node?.children?.length > 0;
  }
}
