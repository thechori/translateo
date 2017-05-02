import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

// Pages
import { HomePage } from '../pages/home/home';
import { ItemsPage } from '../pages/items/items';
import { SettingsPage } from '../pages/settings/settings';
import { Quiz } from '../pages/quiz/quiz';
import { NumbersQuiz } from '../pages/quiz/quizzes/numbers';
import { DescriptionsQuiz } from '../pages/quiz/quizzes/descriptions';
import { GreetingsQuiz } from '../pages/quiz/quizzes/greetings';


// Services
import { ItemService } from '../providers/item-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    HomePage,
    TabsPage,
    ItemsPage,
    Quiz,
    NumbersQuiz,
    DescriptionsQuiz,
    GreetingsQuiz
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    HomePage,
    TabsPage,
    ItemsPage,
    Quiz,
    NumbersQuiz,
    DescriptionsQuiz,
    GreetingsQuiz
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemService
  ]
})
export class AppModule {}
