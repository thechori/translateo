import { Component, Input } from '@angular/core';
import { MediaPlugin, MediaObject } from '@ionic-native/media';
import { Platform } from 'ionic-angular';

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

  // Bound from input parameter on component
  @Input()
  title: string;

  src: string;
  isPlaying: boolean;
  isPaused: boolean;
  isStopped: boolean;

  file: MediaObject;

  // @Input()
  // title: string = "hello"

  constructor(private media: MediaPlugin, public platform: Platform) {
    console.log('Hello AudioPlayer Component');

    // TODO: Migrate this to a local file -- the Media plugin seems to be causing a long
    // running thread which is causing warnings to appear.
    // "THREAD WARNING: ['Media'] took 17ms. PLugin should use a background thread."
    // this.src = 'http://incompetech.com/music/royalty-free/mp3-preview2/Ouroboros.mp3';
    this.src = '../../assets/media/Ouroboros.mp3';
    this.isPlaying = false;
    this.isPaused = false;
    this.isStopped = true;

    if (platform.is('cordova')) {
      console.log("You are on a Cordova device");
      console.log(platform.platforms());
      this.file = media.create(this.src, function(status) {
        console.log("media status:")
        console.log(status)
      });
    }

  }

  play() {
    console.log("play");

    if (this.isPlaying) {
      return;
    }

    this.isPlaying = true;
    this.isPaused = false;
    this.isStopped = false;

    if (this.platform.is('cordova'))
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

    if (this.platform.is('cordova'))
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

    if (this.platform.is('cordova'))
      this.file.stop();
  }


}
