import {FormsModule, NgModel} from '@angular/forms';
import {NgModule} from '@angular/core';
import {ChangeTimeDirective} from './directives/change-time.directive';
import {ChangeTimePipe} from './pipes/change-time.pipe';
import {PlayerComponent} from './player/player.component';
import {MatIconModule} from '@angular/material/icon';
import {PlayerWindowComponent} from './window';
import {MatDialogModule} from '@angular/material/dialog';
import {
  CdkDrag,
  CdkDragHandle,
} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    PlayerWindowComponent,
    ChangeTimeDirective,
    ChangeTimePipe,
    PlayerComponent,
  ],
  exports: [
    ChangeTimePipe,
    ChangeTimeDirective,
    PlayerComponent,
    PlayerWindowComponent,
  ],
  imports: [
    FormsModule,
    MatIconModule,
    MatDialogModule,
    CdkDrag,
    CdkDragHandle,
  ],
})
export class PlayerModule {}
