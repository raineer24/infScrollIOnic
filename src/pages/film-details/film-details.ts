import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { FavoriteProvider } from './../../providers/favorite/favorite';


@IonicPage()
@Component({
  selector: 'page-film-details',
  templateUrl: 'film-details.html',
})
export class FilmDetailsPage {
  film: any;
  isFavorite = false;

  constructor(public favoriteProvider: FavoriteProvider, public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {
    this.film = this.navParams.get('film');
    this.favoriteProvider.isFavorite(this.film.episode_id).then(isFav => {
      this.isFavorite = isFav;
    })
  }
  favoriteFilm() {
    
  }

  goBack(){
    this.navCtrl.pop();
  }

  shareFilm() {
    let email = {
      to: 'rain@test.com',
      subject: 'I hate this one: ' + this.film.title,
      body: 'Can you remember the opening?<br><br>\"' + this.film.opening_crawl + '\"',
      isHtml: true
    };
    this.emailComposer.open(email);
  }

}
