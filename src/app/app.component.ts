import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController, Nav } from 'ionic-angular';
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
  @ViewChild(Nav) nav:Nav;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    deeplinks: Deeplinks,
    alertCtrl: AlertController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // Deeplinking (Ionic 2)
      deeplinks.routeWithNavController(this.nav, {
        '/descriptions': DescriptionsQuiz,
        '/greetings': GreetingsQuiz,
        '/numbers': NumbersQuiz,

        '/quiz/descriptions': DescriptionsQuiz,
        '/quiz/greetings': GreetingsQuiz,
        '/quiz/numbers': DescriptionsQuiz,

      }).subscribe((match) => {
        console.log("MATCH FOUND!");
        console.log(match);
        console.log("******");
        console.log('match found', match);
      }, (nomatch) => {
        console.log("no match found..")
        console.warn(nomatch);
      })
    });
  }
}
