import {NgModule} from '@angular/core';
import {MainComponent} from './main';
import {AboutTextComponent} from './about-text';
import {CommonModule} from '@angular/common';
import {HomeModule} from '../other';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {
  TabsAngularComponent,
  TabsSharpComponent,
  TabsPythonComponent,
} from './mat-tabs';

@NgModule({
  declarations: [
    MainComponent,
    AboutTextComponent,
    TabsSharpComponent,
    TabsPythonComponent,
    TabsAngularComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    MatTabsModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [MainComponent, AboutTextComponent],
})
export class MainModule {}
