import {Component, OnInit} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import FilesNode from '../../treeview/additional_files/interfaces/files-node.intrface';
import {NestedTreeControl} from '@angular/cdk/tree';
import {DATA} from './data/data';

@Component({
  selector: 'win-os-folder',
  template: `<mat-tree
    [dataSource]="nestedSource"
    [treeControl]="nestedControl"
  >
    <mat-tree-node
      class="mat-tree"
      *matTreeNodeDef="let node"
      matTreeNodeToggle
    >
      <mat-icon *ngIf="!nestedControl.isExpanded(node)">
        {{ node.icon }}
      </mat-icon>
      {{ node.name }}
    </mat-tree-node>
    <mat-nested-tree-node
      *matTreeNodeDef="let node; when: hasNOdeChild"
    >
      <div class="mat-tree-node">
        <button mat-icon-button matTreeNodeToggle>
          <mat-icon>
            {{
              nestedControl.isExpanded(node)
                ? 'expand_more'
                : 'chevron_right'
            }}
          </mat-icon>
        </button>
        {{ node.name }}
      </div>
      <div
        class="nested-node"
        [class.invisible]="!nestedControl.isExpanded(node)"
      >
        <ng-container matTreeNodeOutlet></ng-container>
      </div>
    </mat-nested-tree-node>
  </mat-tree>`,
  styles: [
    `
      .mat-tree {
        width: 400px;
      }
      .nested-node {
        padding-left: 80px;
      }

      .invisible {
        display: none;
      }
    `,
  ],
})
export class OsFolderComponent implements OnInit {
  nestedSource = new MatTreeNestedDataSource<FilesNode>();
  nestedControl = new NestedTreeControl<FilesNode>(
    (node) => node.children
  );
  ngOnInit() {
    this.nestedSource.data = DATA;
  }
  hasNOdeChild(index: number, node) {
    return node?.children?.length > 0;
  }
}
