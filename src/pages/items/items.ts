import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the items page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {

  items: Array<{english: string, pinyin: string, tag: string}>;
  myName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.myName = "Ryan";

    this.items.push({
      english: "Hello",
      pinyin: "Ni hao",
      tag: "greeting"
    });

    this.items.push({
      english: "Good bye",
      pinyin: "Zai jian",
      tag: "greeting"
    });

    this.items.push({
      english: "Pretty",
      pinyin: "Pya liang",
      tag: "description"
    });

    this.items.push({
      english: "I'm hungry",
      pinyin: "Wô èle",
      tag: "phrase"
    });

  }

  openPage() {
    console.log("open!!");
  }

  sayHello() {
    console.log("hello");
  }

  switchTabs() {
    this.navCtrl.parent.select(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad items');
    this.sayHello();
  }

}
