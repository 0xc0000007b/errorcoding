import {NgModule} from '@angular/core';
import {
  CalendarComponent,
  CalendarHeadingComponent,
  MomentPipe,
  TaskBarComponent,
} from './components';
import {CommonModule} from '@angular/common';

import {PlayerModule} from '../../windows';
import {MatIconModule} from '@angular/material/icon';
import {DateService} from './services';

import {ContextMenuComponent} from '../desktop/context-menu/context-menu.component';
import {WindowsModule} from '../../windows/windows.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ClickOutsideDirective} from '../../directives';

@NgModule({
  declarations: [
    TaskBarComponent,
    ContextMenuComponent,
    MomentPipe,
    CalendarComponent,
    CalendarHeadingComponent,
    ClickOutsideDirective,
  ],
  imports: [
    CommonModule,
    PlayerModule,
    MatIconModule,
    WindowsModule,
    ReactiveFormsModule,
  ],
  providers: [DateService],
  exports: [
    TaskBarComponent,
    ContextMenuComponent,
    ClickOutsideDirective,
  ],
})
export class TaskbarModule {}
