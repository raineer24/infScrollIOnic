import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

import { ApiProvider } from './../../providers/api/api';
 
/**
 * Generated class for the FilmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
  films: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider ) {
    this.films = this.apiProvider.getFilms();
  
  }

 openDetails(film) {
   this.navCtrl.push('FilmDetailsPage', {film: film});
 }
 goToBeverages(){
   this.navCtrl.parent.select(2);
 }

}
