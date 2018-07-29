import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<any> = [];

  constructor() { }

  addToCart(item) {
    this.cart.push(item)
    console.log("new tem added to this.cart.");
  }
  getCart() {
    return this.cart;
  }


}
