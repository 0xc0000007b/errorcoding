import {Component, OnInit} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {SkillNode} from '../../main/interfaces/skill-node.interface';
import {NestedTreeControl} from '@angular/cdk/tree';
import {
  Skills_DATA_SHARP,
  WANNA_DATA_SHARP,
} from '../../main/data';

@Component({
  selector: 'sharp-tabs',
  template: ` <mat-tab-group class="tab">
    <mat-tab label="Я умею">
      <mat-tree
        class="mat-tree"
        [dataSource]="treeSourceSharp"
        [treeControl]="treeControlSharp"
      >
        <mat-tree-node
          *matTreeNodeDef="let node"
          matTreeNodeToggle
        >
          {{ node.name }}
        </mat-tree-node>
        <mat-nested-tree-node
          *matTreeNodeDef="let node; when: hasNode"
        >
          <div class="mat-tree-node">
            <button mat-icon-button matTreeNodeToggle>
              <mat-icon>
                {{
                  treeControlSharp.isExpanded(node)
                    ? 'expand_more'
                    : 'chevron_right'
                }}
              </mat-icon>
            </button>
            {{ node.name }}
          </div>
          <div
            class="nested-node"
            [class.invisible]="
              !treeControlSharp.isExpanded(node)
            "
          >
            <ng-container matTreeNodeOutlet></ng-container>
          </div>
        </mat-nested-tree-node>
      </mat-tree>
    </mat-tab>
    <mat-tab label="Хотелось бы" class="mat-tree">
      <mat-tree
        [dataSource]="treeOfWanna"
        [treeControl]="treeOfWannaControl"
      >
        <mat-tree-node
          *matTreeNodeDef="let node"
          matTreeNodeToggle
        >
          {{ node.name }}
        </mat-tree-node>
        <mat-nested-tree-node
          *matTreeNodeDef="let node; when: hasNode"
        >
          <div class="mat-tree-node">
            <button mat-icon-button matTreeNodeToggle>
              <mat-icon>
                {{
                  treeOfWannaControl.isExpanded(node)
                    ? 'expand_more'
                    : 'chevron_right'
                }}
              </mat-icon>
            </button>
            {{ node.name }}
          </div>
          <div
            class="nested-node"
            [class.invisible]="
              !treeOfWannaControl.isExpanded(node)
            "
          >
            <ng-container matTreeNodeOutlet></ng-container>
          </div>
        </mat-nested-tree-node>
      </mat-tree>
    </mat-tab>
  </mat-tab-group>`,
  styles: [
    `
      .mat-tree {
        width: 1000px;
      }
    `,
  ],
})
export class TabsSharpComponent implements OnInit {
  treeSourceSharp =
    new MatTreeNestedDataSource<SkillNode>();
  treeControlSharp = new NestedTreeControl<SkillNode>(
    (node) => node.children
  );
  treeOfWanna = new MatTreeNestedDataSource<SkillNode>();
  treeOfWannaControl = new NestedTreeControl<SkillNode>(
    (node) => node.children
  );

  hasNode(index: number, node: SkillNode) {
    return node?.children?.length > 0;
  }
  ngOnInit() {
    this.treeSourceSharp.data = Skills_DATA_SHARP;
    this.treeOfWanna.data = WANNA_DATA_SHARP;
  }
}
