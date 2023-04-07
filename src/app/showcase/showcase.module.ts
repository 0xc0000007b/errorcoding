import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {FooterModule} from './components';
import {MainComponent, MainModule} from './components';

import {Route, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

const routes: Route[] = [
  {path: 'home', component: MainComponent},
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    FooterModule,
    MainModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
})
export class ShowcaseModule {}
