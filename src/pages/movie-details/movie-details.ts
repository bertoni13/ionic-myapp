import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
  providers: [MovieProvider]
})
export class MovieDetailsPage {

	public filme;
	public filmeId;
  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public movieProvider: MovieProvider
  	) {
  }

  ionViewDidLoad() {
  	this.filmeId = this.navParams.get("id");
  	this.movieProvider.getMoviesDetails(this.filmeId).subscribe(data =>{
  		let retorno = (data as any)._body;
  		this.filme = JSON.parse(retorno);
      console.info(this.filme);
  	},error =>{
  		console.info("error");
  	})

    // this.movieProvider.getNetwork(this.filmeId).subscribe(data =>{
    //   let net = (data as any)._body;
    //   this.filme = JSON.parse(net);
    //   console.info(this.filme);
    // })
  }

}
