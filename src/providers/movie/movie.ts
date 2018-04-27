import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieProvider {

	private url = 'https://api.themoviedb.org/3';
  private translate = '&language=pt-BR';
  private region = '&region=US'
  constructor(public http: Http) {
  }

  getPopularMovies(page){
  	return this.http.get(this.url + `/movie/popular?page=${page}&api_key=9c3d2c4419996bf281beb88bd141f2f3` + this.translate);
  }
  getNowMovies(){
    return this.http.get(this.url + `/movie/now_playing?api_key=9c3d2c4419996bf281beb88bd141f2f3` + this.translate);
  }  
  getTopMovies(page){
    return this.http.get(this.url + `/movie/top_rated?page=${page}&api_key=9c3d2c4419996bf281beb88bd141f2f3` + this.translate);
  } 
  getUpcomingMovies(page){
    return this.http.get(this.url + `/movie/upcoming?page=${page}&api_key=9c3d2c4419996bf281beb88bd141f2f3` + this.translate);
  } 
  getMoviesDetails(filmeId){
    return this.http.get(this.url + `/movie/${filmeId}?api_key=9c3d2c4419996bf281beb88bd141f2f3` + this.translate);
  }
  getNetwork(filmeId){
    return this.http.get(this.url + `/movie/${filmeId}external_ids?api_key=9c3d2c4419996bf281beb88bd141f2f3`);
  } 
  getVideosMovies(filmeId){
    return  this.http.get(this.url + `/movie/${filmeId}/videos?api_key=9c3d2c4419996bf281beb88bd141f2f3`);
  } 
}
