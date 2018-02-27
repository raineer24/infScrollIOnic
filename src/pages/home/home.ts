import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Observable } from "rxjs";
import { Subject } from "rxjs/Subject";
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  apple: any;
  banana: any;
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
     let mySubject = new Subject(); 
     
     mySubject.subscribe((data) => {
       console.log(data);
     });

     mySubject.next("Omg");
   
    // let myObservable = Observable.create(observer => {
    //   observer.next("Hello");
    // });

    // myObservable.subscribe((data) => {
    //     console.log(data);
    // });
  }
  

  

  ionViewDidLoad() {
    this.getFromStorageStandard().then((result) => {
      this.apple = result;
    });

    this.banana = this.getFromStorageAsync();
  }
  setInStorage(){
    this.storage.set('apple', '3.99');
     this.storage.set("banana", "4.25");
  }

  getFromStorageStandard(){
    return this.storage.get('apple');
  }

  async getFromStorageAsync(){
    return await this.storage.get('banana');
  }

  navigateToPeoplePage(){
    this.navCtrl.push("PeoplePage");
  }
}
