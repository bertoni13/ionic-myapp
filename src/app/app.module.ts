import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {JsonpModule, Jsonp} from '@angular/http';
import {FormsModule}   from '@angular/forms';
import { HomePage } from '../pages/home/home';
import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPageModule } from '../pages/intro/intro.module';
// import { TabsPage } from '../pages/tabs/tabs';
import { HttpModule } from  '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieProvider } from '../providers/movie/movie';
import { MovieDetailsPageModule } from '../pages/movie-details/movie-details.module' 
import { TopMoviePageModule } from '../pages/top-movie/top-movie.module'
import { NextMoviesPageModule } from '../pages/next-movies/next-movies.module' 
import { NewMoviesPageModule } from '../pages/new-movies/new-movies.module' 
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    IntroPageModule,
    HttpModule,
    MovieDetailsPageModule,
    TopMoviePageModule,
    NextMoviesPageModule,
    NewMoviesPageModule,
    ConfiguracoesPageModule,
    JsonpModule, FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    JsonpModule, FormsModule,,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
  ]
})
export class AppModule {}
