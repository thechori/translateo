import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
// import { ModalContentPage } from '../../pages/items/editModal';
import { ItemService } from '../../providers/item-service';
import { ItemSliding } from 'ionic-angular';

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
    public itemService: ItemService
    // public editModal: ModalContentPage
  ) {

    // Load the Items using the ItemService
    this.loadItems();
  }

  // Load items into using ItemService
  loadItems() {
    this.itemService.load().then(data => {
      this.items = data;
    })
  }

  newItem() {
    // TODO: Utilize a Modal instead of the Alert to allow for inputting data
    let alert =  this.alertCtrl.create({
      title: "New Item",
      // subTitle: "Enter the details for the item you'd like to create.",
      inputs: [
        {
          name: 'english',
          placeholder: 'English'
        },
        {
          name: 'pinyin',
          placeholder: 'Pinyin'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log("cancel");
          }
        },
        {
          text: 'Create',
          handler: (data) => {
            console.log("creating new Item");
            console.log(data);
            this.itemService.addItem(data).then(() => {
              this.loadItems();
            })
          }
        }
      ]
    });

    alert.present();
  }

  editItem() {
    // let editModal = this.modalCtrl.create(ModalContentPage);
    // editModal.present();
    console.log("editItem()");
  }

  deleteItem(slidingItem: ItemSliding, item) {
    let alert =  this.alertCtrl.create({
      title: "Delete Item",
      message: "Are you sure you want to delete \""+item.english+"\"?",
      buttons: [{
        text: 'Cancel',
        handler: data => {
          slidingItem.close();
        }
      }, {
        text: 'Delete',
        handler: data => {
          slidingItem.close();
          this.itemService.deleteItem(item).then(() => {
            this.loadItems();
          })
        }
      }]
    });

    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad items');
  }
}
