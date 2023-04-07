import {NgModule} from '@angular/core';
import {SettingsComponent} from './components/settings';
import {CommonModule} from '@angular/common';
import {SettingsWindowsComponent} from './components/settings/window';
import {SettingsTabListComponent} from './components/settings-tab-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {
  CdkDrag,
  CdkDragHandle,
} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import {ThemeSwitchComponent} from '../theme-switch';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {ThemeSwicthService} from '../../../../../services';
import {StyleManagerService} from '../../../../../services';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SettingsComponent,
    SettingsWindowsComponent,
    SettingsTabListComponent,
    ThemeSwitchComponent,
  ],
  providers: [ThemeSwicthService, StyleManagerService],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    CdkDrag,
    CdkDragHandle,
    MatIconModule,
    MatMenuModule,
    MatButtonToggleModule,
    FormsModule,
  ],
  exports: [SettingsWindowsComponent],
})
export class SettingsModule {}
