import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { TopMoviePage } from '../top-movie/top-movie';
import { NextMoviesPage } from '../next-movies/next-movies';

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {

	public rootPage = HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  }

  openHome(){
  	this.navCtrl.push(HomePage);
  }
  openFeed(){
  	this.navCtrl.push(FeedPage);
  }  
  openTopMovie(){
    this.navCtrl.push(TopMoviePage);
  }
  openNextMovie(){
    this.navCtrl.push(NextMoviesPage);
  } 

}
