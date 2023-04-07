import {NgModule} from '@angular/core';
import {DectopComponent} from './dectop';
import {BaseDesctopComponent} from './base-desctop';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {TaskbarModule} from '../taskbar';
import {FormsModule} from '@angular/forms';
import {CdkDrag} from '@angular/cdk/drag-drop';
import {WindowsModule} from '../../windows/windows.module';
import {SelectDirective} from '../../directives';

@NgModule({
  declarations: [
    DectopComponent,
    BaseDesctopComponent,
    SelectDirective,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    TaskbarModule,
    FormsModule,
    CdkDrag,
    WindowsModule,
  ],
  exports: [DectopComponent, BaseDesctopComponent],
})
export class DesktopModule {}
