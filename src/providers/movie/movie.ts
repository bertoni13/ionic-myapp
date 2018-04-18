import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

	private url = 'https://api.themoviedb.org/3';
  private translate = '&language=pt-BR';
  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLastestMovies(){
  	return this.http.get(this.url + "/movie/popular?api_key=9c3d2c4419996bf281beb88bd141f2f3" + this.translate);
  }
}
