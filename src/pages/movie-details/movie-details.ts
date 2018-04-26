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
  public video;
  public youtube: string = 'https://www.youtube.com/embed/'
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

    // this.movieProvider.getVideosMovies(this.filmeId).subscribe(data =>{
    //   let videos = (data as any)._body;
    //     this.video = JSON.parse(videos);
    //     for (let entry of this.video.results) {
    //          // 1, "string", false
    //         let s = this.youtube + entry.id;
    //         console.log('dsdasdas', s);

    //     }
    //   }
    // )
  }

}
