import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
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
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module'
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
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
    ConfiguracoesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
  ]
})
export class AppModule {}
