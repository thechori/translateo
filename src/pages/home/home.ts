import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Quiz } from '../quiz/quiz';
import { Camera } from '@ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public base64Image: string;

  constructor(public navCtrl: NavController) {

  }

  homeBtn() {
    console.log("clickity");
  }

  loadQuiz() {
    this.navCtrl.push(Quiz);
  }

  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }


}
