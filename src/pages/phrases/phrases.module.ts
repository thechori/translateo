import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhrasesPage } from './phrases';

@NgModule({
  declarations: [
    PhrasesPage,
  ],
  imports: [
    IonicPageModule.forChild(PhrasesPage),
  ],
  exports: [
    PhrasesPage
  ]
})
export class PhrasesModule {}
