import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  title: string = 'shopIT';
  isCartOpen: boolean = false;
  cart: Array<any> = [];
  products: Array<any> = [
    {
      id: 111,
      name: 'Laptop',
      price: 198000,
      discount: 10000.00,
      description: 'New Mac pro',
      canBuy: true,
      image: 'images/Laptop.png',
      makeDate: Date.now()
    },
    {
      id: 222,
      name: 'Mobile',
      price: 47000,
      description: 'New pro',
      canBuy: true,
      image: 'images/Mobile.png',
      makeDate: Date.now()
    }
  ];

  addToCart(item) {
    this.cart.push(item)
  }

  toggleCart(e) {
    e.preventDefault();
    this.isCartOpen = !this.isCartOpen;
  }

}
