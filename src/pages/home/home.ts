import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
 	providers:[
 	MovieProvider
 ]  
})
export class HomePage {

	public lista_filmes: Array<any>;
	public lista_filmes_now: Array<any>;
	public filme;
	public page = 1;
	Object = Object;
  constructor(public navCtrl: NavController, private movieProvider: MovieProvider,) {

  }
	ionViewDidLoad() {
		this.carregarFilmes();
		this.carregaFilmesNow();
	}
 	carregarFilmes(newpage: boolean = false){
 		this.movieProvider.getTopMovies(this.page).subscribe(
 			data =>{
 				const response = (data as any);
 				const ret = JSON.parse(response._body);
 				// this.lista_filmes = ret.results[0];
 				this.lista_filmes = ret.results;
 				console.info(this.lista_filmes);
 			}, error=>{
 				console.info(error);
 			}
 		) 	
 	};	
 	carregaFilmesNow(){
 		this.movieProvider.getNowMovies().subscribe(data =>{
 			const response = (data as any);
 			const last = JSON.parse(response._body);
 			this.lista_filmes_now = last.results;
 			console.info(this.lista_filmes_now);
 		})	 		
 	}
}
