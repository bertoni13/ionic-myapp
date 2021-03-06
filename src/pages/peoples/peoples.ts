import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { LoadingController } from 'ionic-angular';
import { PeoplesDetailsPage } from '../peoples-details/peoples-details';
import { JsonpModule, Jsonp } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-peoples',
  templateUrl: 'peoples.html',
})
export class PeoplesPage {

	public lista_filmes: Array<any>;
	public page = 1;
	public infinitScroll;
	public loader;
	public query: string;
	public refresher;
	public isrefresher: boolean = false;
	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		private movieProvider: MovieProvider,
		public loadingCtrl: LoadingController,
		private jsonp: Jsonp) {
	}
	public loadingMovies(){
		this.loader = this.loadingCtrl.create({
			content: "Carregando...",
		});
		this.loader.present();
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
	openDetails(person){
		this.navCtrl.push(PeoplesDetailsPage, { id: person.id })
	}
	search(){
    if(this.query) {
      let url = `https://api.themoviedb.org/3/search/person?api_key=9c3d2c4419996bf281beb88bd141f2f3&language=pt-BR&page=1&include_adult=false&query=${encodeURIComponent(this.query)}&callback=JSONP_CALLBACK`;
      return this.jsonp.get(url).subscribe(data => {this.lista_filmes = data.json().results;});
    }
	}
	carregarFilmes(newpage: boolean = false){
    this.movieProvider.getPeoples(this.page).subscribe(
      data => {
        const response = (data as any);
        const ret = JSON.parse(response._body);
        console.info("dsdasd",ret)
        if(newpage){
          this.lista_filmes = this.lista_filmes.concat(ret.results);
          console.info("dSADASDasdasd", this.lista_filmes)
        }else {
          this.lista_filmes = ret.results;
          console.info("dSADASDasdasd2", this.lista_filmes)
        }
      }
    )
		// this.loadingMovies();
		// this.movieProvider.getNowMovies(this.page).subscribe(
		// 	data =>{
		// 		const response = (data as any);
		// 		const ret = JSON.parse(response._body);
		// 		console.info(ret);
 		// 		if(newpage){
 		// 			this.lista_filmes = this.lista_filmes.concat(ret.results);
 		// 			this.infinitScroll.complete();
 		// 		}else{
 		// 			this.lista_filmes = ret.results;
 		// 		}
    //
 		// 		this.closeMovie();
 		// 		if(this.isrefresher){
 		// 			this.refresher.complete();
 		// 			this.isrefresher = false;
 		// 		}
 		// 	}, error=>{
 		// 		console.info(error);
 		// 		if(this.isrefresher){
 		// 			this.refresher.complete();
 		// 			this.isrefresher = false;
 		// 		}
 		// 	}
		// )
	}

}
