import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewMoviesPage } from './new-movies';

@NgModule({
  declarations: [
    NewMoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(NewMoviesPage),
  ],
})
export class NewMoviesPageModule {}
