import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopMoviePage } from './top-movie';

@NgModule({
  declarations: [
    TopMoviePage,
  ],
  imports: [
    IonicPageModule.forChild(TopMoviePage),
  ],
})
export class TopMoviePageModule {}
