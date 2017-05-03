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

      // Initialize deep linking
      // deeplinks.route({
      //   '/descriptions': DescriptionsQuiz,
      //   '/quiz/numbers': NumbersQuiz,
      //   '/quiz/greetings': GreetingsQuiz,
      //   '/quiz/descriptions': DescriptionsQuiz
      // }).subscribe((match) => {
      //   console.log('Successfully matched route!');
      //
      //   console.log("match:");
      //   console.log(match);
      //
      //   console.log("link:");
      //   console.log(match.$link);
      //
      //   console.log("args:");
      //   console.log(match.$args);
      //
      //   alertCtrl.create({
      //     title: 'Match!',
      //     message: "Link: " + match.$link + " .. Args: " + match.$args + " .. Route: " + match.$route
      //   }).present()
      // }, (nomatch) => {
      //   console.error('Got a deeplink that didn\'t match')
      //   console.log(nomatch)
      //   alertCtrl.create({
      //     title: 'No match..',
      //     message: "Link: " + nomatch.$link + " .. Args: " + nomatch.$args + " .. Route: " + nomatch.$route
      //   }).present()
      // });


    });
  }
}
