import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Quiz } from '../quiz/quiz';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  songTitle: string = "John Mayer - Gravity"

  constructor(public navCtrl: NavController, public browser: ThemeableBrowser) {

  }

  homeBtn() {
    console.log("clickity");
  }

  loadQuiz() {
    this.navCtrl.push(Quiz);
  }

  openBrowser() {
    const options: ThemeableBrowserOptions = {
       statusbar: {
           color: '#000000'
       },
       toolbar: {
           height: 44,
           color: '#ff0000'
       },
       title: {
           color: '#ffffff',
           showPageTitle: true
       },
       backButton: {
           image: 'back',
           imagePressed: 'back_pressed',
           align: 'left',
           event: 'backPressed'
       },
       forwardButton: {
           image: 'forward',
           imagePressed: 'forward_pressed',
           align: 'left',
           event: 'forwardPressed'
       },
       closeButton: {
           image: 'close',
           imagePressed: 'close_pressed',
           align: 'left',
           event: 'closePressed'
       },
       customButtons: [
           {
               image: 'share',
               imagePressed: 'share_pressed',
               align: 'right',
               event: 'sharePressed'
           }
       ],
       menu: {
           image: 'menu',
           imagePressed: 'menu_pressed',
           title: 'Test',
           cancel: 'Cancel',
           align: 'right',
           items: [
               {
                   event: 'helloPressed',
                   label: 'Hello World!'
               },
               {
                   event: 'testPressed',
                   label: 'Test!'
               }
           ]
       },
       backButtonCanClose: true
  };

    let browser: ThemeableBrowserObject = this.browser.create('https://engadget.com', '_blank', options);
  }
}
