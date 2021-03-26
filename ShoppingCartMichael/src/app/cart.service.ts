import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any = [];
  constructor() { }

  addToCart(product: any) {
    this.items.push(product);
    console.log(this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart(){
    this.items=[];
    return this.items;
  }

  calculateSum(){
    for (let i in this.items){
      // let sum = 0;
      // let price = this.items[i].productPrice.substring()
    }
  }
}
