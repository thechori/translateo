import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NumbersQuiz } from './quizzes/numbers';
import { DescriptionsQuiz } from './quizzes/descriptions';
import { GreetingsQuiz } from './quizzes/greetings';

/**
 * Generated class for the Quiz page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class Quiz {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // public numbersQuiz: NumbersQuiz
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Quiz');
  }

  startNumbersQuiz() {
    this.navCtrl.push(NumbersQuiz);
  }

  startGreetingsQuiz() {
    this.navCtrl.push(GreetingsQuiz);
  }

  startDescriptionsQuiz() {
    this.navCtrl.push(DescriptionsQuiz);
  }

}
