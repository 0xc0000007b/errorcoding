import {NgModule} from '@angular/core';
import {ImagesComponent} from './components/images-directory';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ImagesComponent],
  imports: [CommonModule],
  exports: [ImagesComponent],
})
export class ImageDirectoryModule {}
