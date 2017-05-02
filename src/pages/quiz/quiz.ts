import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TheQuiz } from './thequiz';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad(theQuiz: TheQuiz) {
    console.log('ionViewDidLoad Quiz');
  }

  startNumbersQuiz() {
    this.navCtrl.push(TheQuiz);
  }

  startGreetingsQuiz() {
    
  }

  startDescriptionsQuiz() {

  }

}
