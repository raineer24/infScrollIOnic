import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // users = [];
  // page = 0;
  // maximumPages = 3;

  // constructor(public navCtrl: NavController, private httpClient: HttpClient) {
  //     // this.loadUsers();
  // }
  // loadUsers(infiniteScroll?) {
  //   this.httpClient.get(`https://randomuser.me/api/?results=20&page=${this.page}`)
  //   .subscribe(res => {
  //     this.users = this.users.concat(res['results']);
  //     if(infiniteScroll) {
  //       infiniteScroll.complete();
  //     }
  //   })
  // }
  // loadMore(infiniteScroll){
  //   this.page++;
  //   this.loadUsers(infiniteScroll);

  //   if(this.page === this.maximumPages){
  //     infiniteScroll.enable(false);
  //   }
  // }

}
