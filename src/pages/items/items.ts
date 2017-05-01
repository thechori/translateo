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

  public items: any;

  constructor(
    // public greetings: Greetings,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public itemService: ItemService,
    // public editModal: ModalContentPage
  ) {

    // Load the Items using the ItemService
    this.loadItems();
  }

  // Load items into using ItemService
  loadItems() {
    console.log("loadItems");
    this.itemService.load().then(data => {
      this.items = data;
    })
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

  deleteItem(item) {
    let alert =  this.alertCtrl.create({
      title: "Delete Item",
      message: "Are you sure you want to delete \""+item.english+"\"?",
      buttons: [{
        text: 'Cancel',
        handler: data => {
          console.log("Cancelled Item delete");
          console.log(item);
        }
      }, {
        text: 'Delete',
        handler: data => {
          console.log("DELETE!")
          // this.itemService.deleteItem(item).then(function() {
          //   return this.itemService.load();
          // });

          this.itemService.a.then(()=>{this.itemService.b})
        }
      }]
    });

    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad items');
  }

  calculateOne() {
    return new Promise(function(resolve, reject) {
      console.log("calculateOne");

      setTimeout(function() {
        console.log("calculateOne done");
        resolve(1);
      }, 4000)
    })
  }

  calculateTen() {
    return new Promise(function(resolve, reject) {
      console.log("calculateTen");

      setTimeout(function() {
        console.log("calculateTen done");
        resolve(2);
      }, 3000)
    })
  }

  calculateHundred() {
    return new Promise(function(resolve, reject) {
      console.log("calculateHundred");

      setTimeout(function() {
        console.log("calculateHundred done");
        resolve(100);
      }, 1000)
    })
  }

  begin() {
    console.log("begin");
    this.calculateTen()
    .then(() => {
      this.calculateOne().then(()=>{
        this.calculateHundred();
      })
    })
  }
}
