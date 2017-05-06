import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Quiz } from '../quiz/quiz';
import { AudioPlayer } from '../../components/audio-player/audio-player';
import { Login } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  songTitle: string = "John Mayer - Gravity"

  constructor(public navCtrl: NavController) {

  }

  homeBtn() {
    console.log("clickity");
  }

  loadQuiz() {
    this.navCtrl.push(Quiz);
  }

  loadLoginPage() {
    this.navCtrl.push(Login);
  }
}
