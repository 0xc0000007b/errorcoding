import {NgModule} from '@angular/core';
import {WindowComponent} from './window';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';

import {ColorDirective} from '../../../../directives';

@NgModule({
  declarations: [WindowComponent, ColorDirective],
  imports: [
    CommonModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  exports: [WindowComponent],
})
export class WindowModule {}
