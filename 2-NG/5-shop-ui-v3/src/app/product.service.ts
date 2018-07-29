import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor() { }

  loadProducts() {
    //..
    return [
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
    ]
  }

}
