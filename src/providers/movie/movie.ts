import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {JsonpModule, Jsonp} from '@angular/http';
@Injectable()
export class MovieProvider {

	private url = 'https://api.themoviedb.org/3';
  private translate = '&language=pt-BR';
  private region = '&region=US';
  public query:string = `https://api.themoviedb.org/3/search/movie?api_key=9c3d2c4419996bf281beb88bd141f2f3&language=pt-BR&page=1&include_adult=false&query=${encodeURIComponent(this.query)}&callback=JSONP_CALLBACK`;
  constructor(public http: Http, private jsonp: Jsonp) {
  }
	getPeoples(page){
		return this.http.get(this.url + `/person/popular?page=${page}&api_key=9c3d2c4419996bf281beb88bd141f2f3` + this.translate);
	}
  getPopularMovies(page){
  	return this.http.get(this.url + `/movie/popular?page=${page}&api_key=9c3d2c4419996bf281beb88bd141f2f3` + this.translate);
  }
  getNowMovies(page){
    return this.http.get(this.url + `/movie/now_playing?page=${page}&api_key=9c3d2c4419996bf281beb88bd141f2f3` + this.translate);
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
    return this.http.get(this.url + `/movie/${filmeId}/external_ids?api_key=9c3d2c4419996bf281beb88bd141f2f3`);
  }
  getVideosMovies(filmeId){
    return  this.http.get(this.url + `/movie/${filmeId}/videos?api_key=9c3d2c4419996bf281beb88bd141f2f3`);
  }
  getSearchMovies(page){
    // return this.http.get(this.url + `/search/movie?api_key=9c3d2c4419996bf281beb88bd141f2f3&language=pt-BR&page=1&include_adult=false&query=${encodeURIComponent(this.query)}&callback=JSONP_CALLBACK`)
    return this.jsonp.get(this.query);
  }
}
