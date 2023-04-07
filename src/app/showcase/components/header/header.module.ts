import {NgModule} from '@angular/core';
import {HeaderComponent} from './header';
import {LogoComponent} from './logo';

import {CommonModule} from '@angular/common';
import {ThemeSwitcherComponent} from './theme-swither';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {
  BaseDesctopComponent,
  ThemeSwicthService,
} from '../../../Windows';
import {ThemeChangerService} from '../../services';
import {Route, RouterModule} from '@angular/router';
import {WindowComponent} from '../other';
const routes: Route[] = [
  {path: 'window', component: BaseDesctopComponent},
];
@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    ThemeSwitcherComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes),
  ],
  providers: [ThemeSwicthService, ThemeChangerService],
  exports: [HeaderComponent],
})
export class HeaderModule {}
