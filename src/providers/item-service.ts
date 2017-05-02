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
    return new Promise((resolve) => {
      this.http.get('http://tiirbo-api.herokuapp.com/api/translateo/v1/items')
        // Call map on the response observable to get the parsed people object
        .map(res => res.json())
        // Subscribe to the observable to get the parsed people object and attach it to the component
        .subscribe(items => {
          this.items = items;
          resolve(this.items);
        });
    });
  }

  // Add Item
  addItem(item) {
    return new Promise((resolve, reject) => {
      this.http.post('http://tiirbo-api.herokuapp.com/api/translateo/v1/items/', item)
      .subscribe(
        (value) => {
          console.log(value)
        }, (err) => {
          if (err) {
            console.log("reject");
            console.log(err);
            reject(err);
          }
        }, () => {
        console.log("addItem.http.subscribe()")
        resolve();
      })
    })
  }

  // Edit Item
  editItem(_id, item) {
    return new Promise((resolve, reject) => {
      this.http.put('http://tiirbo-api.herokuapp.com/api/translateo/v1/item/'+item._id, item)
      .subscribe(
        (value) => {
          console.log(value)
        }, (err) => {
          if (err) {
            console.log("reject");
            console.log(err);
            reject(err);
          }
        }, () => {
          resolve();
        }
      )
    })
  }

  // Delete Item
  deleteItem(item) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://tiirbo-api.herokuapp.com/api/translateo/v1/item/'+item._id)
      .subscribe(function() {
        resolve();
      })
    })
  }

}
