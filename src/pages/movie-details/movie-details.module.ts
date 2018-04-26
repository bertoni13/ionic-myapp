import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieDetailsPage } from './movie-details';
import { YoutubePipe } from '../../pipes/youtube/youtube';
@NgModule({
  declarations: [
    MovieDetailsPage,
    YoutubePipe
  ],
  imports: [
    IonicPageModule.forChild(MovieDetailsPage),
    
  ],
})
export class MovieDetailsPageModule {}
