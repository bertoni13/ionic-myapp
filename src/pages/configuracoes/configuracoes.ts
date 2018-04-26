import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
}
