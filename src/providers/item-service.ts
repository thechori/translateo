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
    console.log('ItemService: constructor()');
  }

  // Load data
  load() {
    console.log("load()");

    // if (this.items) {
    //   // Already loaded data
    //    return Promise.resolve(this.items);
    // }

    // Don't have the data yes
    return new Promise((resolve) => {
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

  // Add Item
  addItem(item) {
    console.log("addItem()");
    return new Promise((resolve, reject) => {
      this.http.post('http://tiirbo-api.herokuapp.com/api/translateo/v1/item/', item)
      .subscribe(() => {
        console.log("addItem.http.subscribe()")
      })
    })
  }

  // Delete Item
  deleteItem(item) {
    console.log("deleteItem()");
    console.log(item);

    return new Promise((resolve) => {
      this.http.delete('http://tiirbo-api.herokuapp.com/api/translateo/v1/item/'+item._id)
      .subscribe(function() {
        console.log("done sending DELETE HTTP request")
      })
    })
  }

  calculateOne() {
    return new Promise(function(resolve, reject) {
      console.log("calculateOne");

      setTimeout(function() {
        console.log("calculateOne done");
        resolve(1);
      }, 1000)
    })
  }

  calculateTen() {
    return new Promise(function(resolve, reject) {
      console.log("calculateTen");

      setTimeout(function() {
        console.log("calculateTen done");
        resolve(2);
      }, 3000)
    })
  }

  calculateHundred() {
    return new Promise(function(resolve, reject) {
      console.log("calculateHundred");

      setTimeout(function() {
        console.log("calculateHundred done");
        resolve(100);
      }, 1000)
    })
  }
}
