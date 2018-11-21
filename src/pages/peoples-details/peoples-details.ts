import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
@IonicPage()
@Component({
  selector: 'page-peoples-details',
  templateUrl: 'peoples-details.html',
  providers: [MovieProvider]
})
export class PeoplesDetailsPage {

	public person;
  public video;
	public person_id;
  public r;
  public rede: Array<any> = [];
  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public movieProvider: MovieProvider
  	) {
  }

  ionViewDidLoad() {
  	this.person_id = this.navParams.get("id");
  	this.movieProvider.getPeoplesDetails(this.person_id).subscribe(data =>{
  		let retorno = (data as any)._body;
  		this.person = JSON.parse(retorno);
  	},error =>{
  		console.info("error");
  	})
    this.movieProvider.getNetworkPeoples(this.person_id).subscribe(data =>{
      let social = (data as any)._body;
      this.r = JSON.parse(social);
      this.rede = Array.of(this.r);
    })
  }

}
