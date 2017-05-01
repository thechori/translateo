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
    let alert = this.alertCtrl.create({
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
          text: 'Cancel'
        },
        {
          text: 'Create',
          handler: (data) => {
            console.log("creating new Item");
            console.log(data);
            this.itemService.addItem(data).then((success) => {
              this.loadItems();
            }, (error) => {
              this.alertCtrl.create({
                title: "Error",
                message: error
              }).present();
            })
          }
        }
      ]
    });

    alert.present();
  }

  editItem(slidingItem: ItemSliding, item) {
    console.log("editItem()");
    this.alertCtrl.create({
      title: "Edit Item",
      inputs: [
        {
          name: 'english',
          placeholder: item.english
        },
        {
          name: 'pinyin',
          placeholder: item.pinyin
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            console.log("data:");
            console.log(data)

            slidingItem.close();
            this.itemService.editItem(item._id, data).then((success) => {
              this.loadItems();
            }, (error) => {
              this.alertCtrl.create({
                title: "Error",
                message: error
              })
            }).catch((err) => {
              console.log(err)
            })
          }
        }
      ]
    }).present();
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
