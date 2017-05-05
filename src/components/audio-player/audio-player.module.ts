import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AudioPlayer } from './audio-player';

@NgModule({
  declarations: [
    AudioPlayer,
  ],
  imports: [
    IonicPageModule.forChild(AudioPlayer),
  ],
  exports: [
    AudioPlayer
  ]
})
export class AudioPlayerModule {}
