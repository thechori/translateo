import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TheQuiz } from './thequiz';

@NgModule({
  declarations: [
    TheQuiz,
  ],
  imports: [
    IonicPageModule.forChild(TheQuiz),
  ],
  exports: [
    TheQuiz
  ]
})
export class TheQuizModule {}
