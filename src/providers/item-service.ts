import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ItemService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ItemService {

  public items: any;

  constructor(public http: Http) {
    console.log('Hello ItemService Provider');

    this.load();
  }

  // Load data
  load() {
    console.log("load()");

    if (this.items) {
      // Already loaded data
       return Promise.resolve(this.items);
    }

    // Don't have the data yes
    return new Promise(resolve => {
      this.http.get('http://tiirbo-api.herokuapp.com/api/translateo/v1/items')
      // Call map on the response observable to get the parsed people object
        .map(res => res.json())
        // Subscribe to the observable to get the parsed people object and attach it to the
        // component
        .subscribe(items => {
          this.items = items;
          console.log(this.items);
          resolve(this.items);
        });
    });
  }

}
