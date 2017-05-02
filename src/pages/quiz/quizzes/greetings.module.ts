import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GreetingsQuiz } from './greetings';

@NgModule({
  declarations: [
    GreetingsQuiz,
  ],
  imports: [
    IonicPageModule.forChild(GreetingsQuiz),
  ],
  exports: [
    GreetingsQuiz
  ]
})
export class GreetingsQuizModule {}
