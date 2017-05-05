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

  title: string;
  src: string;
  isPlaying: boolean;
  isPaused: boolean;
  isStopped: boolean;

  constructor() {
    console.log('Hello AudioPlayer Component');
    this.title = 'Hello World';
    this.src = 'http://incompetech.com/music/royalty-free/mp3-preview2/Ouroboros.mp3';
    this.isPlaying = false;
    this.isPaused = false;
    this.isStopped = true;
  }

  play() {
    console.log("play");

    if (this.isPlaying) {
      return;
    }

    this.isPlaying = true;
    this.isPaused = false;
    this.isStopped = false;
  }

  pause() {
    console.log("pause");

    if (this.isPaused) {
      return;
    }

    this.isPlaying = false;
    this.isPaused = true;
    this.isStopped = false;
  }

  stop() {
    console.log("stop")

    if (this.isStopped) {
      return;
    }

    this.isPlaying = false;
    this.isPaused = false;
    this.isStopped = true;
  }


}
