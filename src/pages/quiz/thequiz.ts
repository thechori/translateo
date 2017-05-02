import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'the-quiz',
  templateUrl: 'thequiz.html'
})
export class TheQuiz {
  constructor() {
    console.log("TheQuiz.constructor()");
  }

  hello() {
    console.log("hello")
  }
}
