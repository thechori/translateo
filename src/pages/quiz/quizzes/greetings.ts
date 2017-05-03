import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, IonicPageModule } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'greetings-quiz',
  templateUrl: 'greetings.html'
})
// Note: You can break this module decorator out into the "thequiz.module.ts" file as well
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
export class GreetingsQuiz {
  constructor() {
    console.log("GreetingsQuiz.constructor()");
  }

}
