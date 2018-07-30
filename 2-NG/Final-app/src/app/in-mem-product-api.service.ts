import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemProductAPIService {

  constructor() { }

  createDb() {
    let products = [
      { id: 1, name: 'item-1', price: 100, qty: 10 },
      { id: 2, name: 'item-2', price: 200, qty: 20 },
      { id: 3, name: 'item-3', price: 300, qty: 30 },
      { id: 4, name: 'item-4', price: 400, qty: 40 },
      { id: 5, name: 'item-5', price: 500, qty: 50 },
      { id: 6, name: 'item-6', price: 600, qty: 60 },
      { id: 7, name: 'item-7', price: 700, qty: 70 },
      { id: 8, name: 'item-8', price: 800, qty: 80 },
      { id: 9, name: 'item-9', price: 900, qty: 90 },
      { id: 10, name: 'item-10', price: 1000, qty: 100 }

    ];
    return { products };
  }
}
