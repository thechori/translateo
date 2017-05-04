import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Quiz } from '../quiz/quiz';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  homeBtn() {
    console.log("clickity");
  }

  loadQuiz() {
    this.navCtrl.push(Quiz);
  }
}
