import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@Injectable()
export class UserData {

  settings: any;

  constructor(public http: Http, public storage: Storage, public alertCtrl: AlertController) {
    // Defaults
    this.settings = {
      firstName: "",
      lastName: "",
      gender: "",
      proMode: false,
      defaultLanguage: "",
      avatar: ""
    }

    // Load user data from SQLite local storage into local instance variable `settings`
    storage.ready().then((success) => {
      // Retrieve the SQLite local storage data and assign to UserData's data property
      storage.get("settings").then((settings) => {
        // Check for null settings object
        if (!settings) {
          console.log("no settings found..");
        } else {
          this.settings.firstName = settings.firstName,
          this.settings.lastName = settings.lastName,
          this.settings.gender = settings.gender,
          this.settings.proMode = settings.proMode,
          this.settings.defaultLanguage = settings.defaultLanguage
          this.settings.avatar = settings.avatar
        }
      })

      // Notify user
      alertCtrl.create({
        title: 'UserData',
        message: 'This provider has been initialized.',
        buttons: [
          {
            text: 'Close'
          }
        ]
      }).present()
    }, (error) => {
      console.error("There was an error initializing the local storage");
    });
  }

  save(updatedSettings) {
    this.storage.set("settings", updatedSettings).then((data) => {
      this.alertCtrl.create({
        title: 'Settings',
        message: 'Your settings have been successfully saved.',
        buttons: [
          {
            text: 'Close'
          }
        ]
      }).present()
    })
  }

}
