import {NgModule} from '@angular/core';
import {TreeviewComponent} from './treeview';
import {CommonModule} from '@angular/common';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [TreeviewComponent],
  imports: [CommonModule, MatTreeModule, MatIconModule],
  exports: [TreeviewComponent],
})
export class TreeviewModule {}
