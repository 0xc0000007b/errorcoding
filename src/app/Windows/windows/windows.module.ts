import {NgModule} from '@angular/core';
import {
  BaseWindowComponent,
  DirectoryModule,
  PlayerModule,
  SettingsModule,
} from './components';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [BaseWindowComponent],
  imports: [
    PlayerModule,
    DirectoryModule,
    SettingsModule,
    MatIconModule,
  ],
  exports: [BaseWindowComponent],
})
export class WindowsModule {}
