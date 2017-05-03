import { Component } from '@angular/core';
import { IonicPage, NavController, IonicPageModule } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'numbers-quiz',
  templateUrl: 'numbers.html'
})
export class NumbersQuiz {
  constructor() {
    console.log("NumbersQuiz.constructor()");
  }

}
