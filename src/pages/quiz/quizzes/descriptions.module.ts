import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DescriptionsQuiz } from './descriptions';

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
export class DescriptionsQuizModule {}
