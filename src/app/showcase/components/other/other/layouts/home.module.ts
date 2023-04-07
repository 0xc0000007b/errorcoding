import {NgModule} from '@angular/core';
import {HomeComponent} from './home';
import {CommonModule} from '@angular/common';
import {HeaderModule} from '../../../header';
import {FooterModule} from '../../footer';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FooterModule, HeaderModule],
  exports: [HomeComponent],
})
export class HomeModule {}
