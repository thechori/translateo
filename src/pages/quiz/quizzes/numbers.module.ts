import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NumbersQuiz } from './numbers';

@NgModule({
  declarations: [
    NumbersQuiz,
  ],
  imports: [
    IonicPageModule.forChild(NumbersQuiz),
  ],
  exports: [
    NumbersQuiz
  ]
})

export class NumbersQuizModule {}
