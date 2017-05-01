import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public storage: Storage) {
    storage.ready().then(() => {
      console.log("Storage ready");

      storage.set("name_first", "Ryan");
      storage.set("name_last", "Teodoro");

      storage.get("name_first").then((val) => {
        console.log("First name: " + val);



        console.log("done");
      })
    })
  }

}
