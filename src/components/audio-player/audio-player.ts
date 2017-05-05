import { Component } from '@angular/core';

/**
 * Generated class for the AudioPlayer component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'audio-player',
  templateUrl: 'audio-player.html'
})
export class AudioPlayer {

  text: string;

  constructor() {
    console.log('Hello AudioPlayer Component');
    this.text = 'Hello World';
  }

  play() {
    console.log("play");
  }

}
