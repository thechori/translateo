import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Phrases page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-phrases',
  templateUrl: 'phrases.html',
})
export class PhrasesPage {

  phrases: Array<{english: string, pinyin: string, tag: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.phrases = [];

    this.phrases.push({
      english: "Hello",
      pinyin: "Ni hao",
      tag: "greeting"
    });

    this.phrases.push({
      english: "Good bye",
      pinyin: "Zai jian",
      tag: "greeting"
    });

    this.phrases.push({
      english: "Pretty",
      pinyin: "Pya liang",
      tag: "description"
    });

    this.phrases.push({
      english: "I'm hungry",
      pinyin: "Wô èle",
      tag: "phrase"
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Phrases');
  }

}
