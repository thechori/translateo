import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, IonicPageModule } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'the-quiz',
  templateUrl: 'thequiz.html'
})
// Note: You can break this module decorator out into the "thequiz.module.ts" file as well
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
export class TheQuiz {
  constructor() {
    console.log("TheQuiz.constructor()");
  }

}
