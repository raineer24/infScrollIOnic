import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = "favoriteFilms";

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {

  

  constructor(public storage: Storage) {}
  
  isFavorite(filmId) {
    return this.getAllFavoriteFilms().then(result => {
      return result && result.indexOf(filmId) !== -1;
    });
  }

  favoriteFilm(filmId) {
    return this.getAllFavoriteFilms().then(result => {
      if(result) {
        result.push(filmId);
        return this.storage.set(STORAGE_KEY, result);

      } else {
        return this.storage.set(STORAGE_KEY, [filmId]);
      }
    });
  }

  getAllFavoriteFilms(){
    return this.storage.get(STORAGE_KEY);
  }

}
