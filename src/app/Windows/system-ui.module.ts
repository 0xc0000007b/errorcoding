import {NgModule} from '@angular/core';

import {WindowsModule} from './windows/windows.module';
import {AdditionalComponent} from './components/Additional/additional.component';
import {MatDialogModule} from '@angular/material/dialog';
import {Route, RouterModule} from '@angular/router';
import {ExitWindowComponent} from './components/Additional/exit-window/exit-window.component';
const routes: Route[] = [
  {path: 'exit', component: AdditionalComponent},
];
@NgModule({
  declarations: [AdditionalComponent, ExitWindowComponent],
  imports: [
    WindowsModule,
    MatDialogModule,
    RouterModule.forChild(routes),
  ],
})
export class SystemUiModule {}
