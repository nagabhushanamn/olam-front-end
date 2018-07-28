import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = "http://localhost:3000/api/products";

  constructor(private http: HttpClient) { }

  loadProducts() {
    return this.http.get(this.apiUrl);
  }

}
