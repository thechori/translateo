import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  public settings: any
  public base64Image: string;

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public alertCtrl: AlertController,
    public camera: Camera,
    public base64ToGallery: Base64ToGallery
  ) {

    // Defaults
    this.settings = {
      firstName: "",
      lastName: "",
      gender: "",
      proMode: false,
      defaultLanguage: "",
      avatar: ""
    }

    // When the storage is ready, retrieve the data and set it to the settings object
    storage.ready().then(() => {
      console.log("Storage ready");

      // Retrieve data from local storage
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
    })
  }

  // Save data to local storage
  save() {
    this.storage.set("settings", this.settings).then((data) => {
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

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      // destinationType Notes:
      // NATIVE_URI saves to iOS gallery, but does not work in img.src
      // DATA_URL does not save to iOS gallery, but works in img.src
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log("image:");
      console.log(base64Image);

      // Populate the image with the data
      (<HTMLImageElement>document.getElementById('avatar')).src = base64Image;

      // Save to SQLite local storage db
      this.settings.avatar = base64Image;

      // Save to gallery .. TODO: FIX THIS
      this.base64ToGallery.base64ToGallery(base64Image,{
        prefix: '_img'
      }).then(
        res => console.log('Saved image to gallery ', res),
        err => console.log('Error saving image to gallery ', err)
      )
    }, (err) => {
      // Handle error
      console.error(err);
    });
  }

}
