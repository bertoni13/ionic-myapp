import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { LoadingController } from 'ionic-angular';
import { MovieDetailsPage } from '../movie-details/movie-details';

@IonicPage()
@Component({
  selector: 'page-new-movies',
  templateUrl: 'new-movies.html',
})
export class NewMoviesPage {

	public lista_filmes: Array<any>;
	public page = 1;
	public infinitScroll;
	public loader;
	public refresher;
	public isrefresher: boolean = false;	
	constructor(public navCtrl: NavController,
		public navParams: NavParams, 
		private movieProvider: MovieProvider,
		public loadingCtrl: LoadingController) {
	}
	public loadingMovies(){
		this.loader = this.loadingCtrl.create({
			content: "Carregando...",
		});
		this.loader.present();
	}

	public closeMovie(){
		this.loader.dismiss();
	}
	public doRefresh(refresher) {
		this.refresher = refresher;
		this.isrefresher = true;
		this.carregarFilmes();

	}
	ionViewDidLoad() {
		this.carregarFilmes();
	}
	doInfinite(infinitScroll) {
		this.page++;
		this.infinitScroll = infinitScroll;
		this.carregarFilmes(true);

	}
	openDetails(filme){
		this.navCtrl.push(MovieDetailsPage, { id: filme.id })
	}
	carregarFilmes(newpage: boolean = false){
		this.loadingMovies();
		this.movieProvider.getNowMovies(this.page).subscribe(
			data =>{
				const response = (data as any);
				const ret = JSON.parse(response._body);
				console.info(ret);
 				if(newpage){
 					this.lista_filmes = this.lista_filmes.concat(ret.results);
 					this.infinitScroll.complete();
 				}else{
 					this.lista_filmes = ret.results;
 				}
 				
 				this.closeMovie();
 				if(this.isrefresher){
 					this.refresher.complete();
 					this.isrefresher = false;
 				}
 			}, error=>{
 				console.info(error);
 				if(this.isrefresher){
 					this.refresher.complete();
 					this.isrefresher = false;
 				}
 			}
		)
	}

}
