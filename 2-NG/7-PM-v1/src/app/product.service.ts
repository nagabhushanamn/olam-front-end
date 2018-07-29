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
  loadProduct(id) {
    return this.http.get(this.apiUrl + "/" + id);
  }
  saveProduct(productData) {
    return this.http.post(this.apiUrl, productData);
  }
  updateProduct(id, productData) {
    return this.http.patch(this.apiUrl + "/" + id, productData);
  }
  deleteProduct(id) {
    return this.http.delete(this.apiUrl + "/" + id);
  }

}
