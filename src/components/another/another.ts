import { Component } from '@angular/core';

/**
 * Generated class for the AnotherComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'another',
  templateUrl: 'another.html'
})
export class AnotherComponent {

  text: string;

  constructor() {
    console.log('Hello AnotherComponent Component');
    this.text = 'Hello World';
  }

}
