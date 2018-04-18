import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
  	MovieProvider
  ]
})
export class FeedPage {

	public feed = {
		titulo:'Charles franca',
		data: "28 Dezembro de 1988",
		desc: 'teste de descricao de filme',
		likes: 15,
		comments: 7,
		time_comment:'11hs atrás'
	}

	public lista_filmes: Array<any>;

	constructor(public navCtrl: NavController,
				public navParams: NavParams, 
				private movieProvider: MovieProvider) {
	}

	public soma(num1:number, num2:number):void{
		alert(num1 + num2);
	}

	ionViewDidLoad() {
		this.movieProvider.getLastestMovies().subscribe(
			data =>{
				const response = (data as any);
				const ret = JSON.parse(response._body);
				this.lista_filmes = ret.results;
				console.info(ret);
		}, error=>{
				console.info(error);
			}
		)
	}
	ionViewDidLoads() {
		this.movieProvider.getTranslate().subscribe(
			data =>{
				const response = (data as any);
				const ret = JSON.parse(response);
				// this.lista_filmes = ret.results;
				console.info(ret);
		}, error=>{
				console.info(error);
			}
		)
	}	

}
