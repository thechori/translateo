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
  src: string;
  isPlaying: boolean;

  constructor() {
    console.log('Hello AudioPlayer Component');
    this.text = 'Hello World';
    this.src = 'http://incompetech.com/music/royalty-free/mp3-preview2/Ouroboros.mp3';
    this.isPlaying = false;
  }

  play() {
    console.log("play");
  }

  pause() {
    console.log("pause");
  }

  stop() {
    console.log("stop")
  }

}
