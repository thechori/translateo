import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
// import { ModalContentPage } from '../../pages/items/editModal';
import { ItemService } from '../../providers/item-service';

// import { Greetings } from '../../pages/items/greetings';

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

  constructor(
    // public greetings: Greetings,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public itemService: ItemService,
    // public editModal: ModalContentPage
  ) {

    this.items = [];

    for (var i = 0; i < 10; i++) {
      this.items.push({
        english: "Hello",
        pinyin: "Ni hao",
        tag: "greeting"
      });
    }

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

  switchTabs() {
    this.navCtrl.parent.select(2);
  }

  newItem() {
    // TODO: Utilize a Modal instead of the Alert to allow for inputting data
    let alert =  this.alertCtrl.create({
      title: "Create New Item",
      subTitle: "Let's create a new Item, shall we??",
      buttons: ['Create']
    });

    alert.present();
  }

  editItem() {
    // let editModal = this.modalCtrl.create(ModalContentPage);
    // editModal.present();
    console.log("editItem()");
    // this.greetings.hello();
  }

  deleteItem() {
    let alert =  this.alertCtrl.create({
      title: "Delete Item",
      subTitle: "Are you sure you want to delete this item?",
      buttons: ['Delete', 'Cancel']
    });

    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad items');
  }
}
