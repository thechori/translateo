import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  // public firstName: string;
  // public lastName: string;
  // public gender: string;
  // public proMode: boolean;
  // public defaultLanguage: string;

  public settings: any

  constructor(public navCtrl: NavController, public storage: Storage) {

    // Defaults
    this.settings = {
      firstName: "",
      lastName: "",
      gender: "",
      proMode: false,
      defaultLanguage: ""
    }

    // When the storage is ready, retrieve the data and set it to the settings object
    storage.ready().then(() => {
      console.log("Storage ready");

      // Clear storage
      // storage.clear().then(()=>{console.log("storage clear")})

      // Retrieve data from local storage
      storage.get("settings").then((settings) => {
        // Check for null settings object
        if (!settings) {
          console.log("no settings found..");
          console.log(settings);
        } else {
          this.settings.firstName = settings.firstName,
          this.settings.lastName = settings.lastName,
          this.settings.gender = settings.gender,
          this.settings.proMode = settings.proMode,
          this.settings.defaultLanguage = settings.defaultLanguage
        }
      })
    })
  }

  // Save data to local storage
  save() {
    this.storage.set("settings", this.settings).then((data) => {
      console.log("settings saved!");
      console.log(data);
    })
  }

}
