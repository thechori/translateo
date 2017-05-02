import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Deeplinks } from '@ionic-native/deeplinks';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages
import { TabsPage } from '../pages/tabs/tabs';
import { NumbersQuiz } from '../pages/quiz/quizzes/numbers';
import { DescriptionsQuiz } from '../pages/quiz/quizzes/descriptions';
import { GreetingsQuiz } from '../pages/quiz/quizzes/greetings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, deeplinks: Deeplinks) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // Initialize deep linking
      deeplinks.route({
        '/quiz/numbers': NumbersQuiz,
        '/quiz/greetings': GreetingsQuiz,
        '/quiz/descriptions': DescriptionsQuiz
      }).subscribe((match) => {
        console.log('Successfully matched route', match);
      }, (nomatch) => {
        console.error('Got a deeplink that didn\'t match', nomatch)
      });
    });
  }
}
