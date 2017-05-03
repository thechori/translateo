import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, IonicPageModule } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'descriptions-quiz',
  templateUrl: 'descriptions.html'
})
// Note: You can break this module decorator out into the "thequiz.module.ts" file as well
@NgModule({
  declarations: [
    DescriptionsQuiz,
  ],
  imports: [
    IonicPageModule.forChild(DescriptionsQuiz),
  ],
  exports: [
    DescriptionsQuiz
  ]
})
export class DescriptionsQuiz {
  constructor() {
    console.log("DescriptionsQuiz.constructor()");
  }

}
