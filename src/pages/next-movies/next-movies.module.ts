import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NextMoviesPage } from './next-movies';

@NgModule({
  declarations: [
    NextMoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(NextMoviesPage),
  ],
})
export class NextMoviesPageModule {}
