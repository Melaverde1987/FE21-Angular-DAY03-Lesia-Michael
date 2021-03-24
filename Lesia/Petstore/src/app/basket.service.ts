import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  items = [];

  constructor() { }

  addToBasket(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearBasket() {
    this.items = [];
    return this.items;
  }
}
