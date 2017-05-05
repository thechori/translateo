import { Component } from '@angular/core';
import { MediaPlugin, MediaObject } from '@ionic-native/media';

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

  file: MediaObject;

  constructor(private media: MediaPlugin) {
    console.log('Hello AudioPlayer Component');
    this.title = 'Ouroboros';
    this.src = 'http://incompetech.com/music/royalty-free/mp3-preview2/Ouroboros.mp3';
    // this.src = '../../assets/media/Ouroboros.mp3';
    this.isPlaying = false;
    this.isPaused = false;
    this.isStopped = true;

    this.file = media.create(this.src, function(status) {
      console.log("media status:")
      console.log(status)
    });
  }

  play() {
    console.log("play");

    if (this.isPlaying) {
      return;
    }

    this.isPlaying = true;
    this.isPaused = false;
    this.isStopped = false;

    this.file.play();
  }

  pause() {
    console.log("pause");

    if (this.isPaused) {
      return;
    }

    this.isPlaying = false;
    this.isPaused = true;
    this.isStopped = false;

    this.file.pause();
  }

  stop() {
    console.log("stop")

    if (this.isStopped) {
      return;
    }

    this.isPlaying = false;
    this.isPaused = false;
    this.isStopped = true;

    this.file.stop();
  }


}
