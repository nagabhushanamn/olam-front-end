import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  loadProducts() {
    let apiUrl = "http://localhost:8080/api/products";
    let stream = this.http.get(apiUrl);
    return stream;
  }
  loadReviews(productId) {
    let apiUrl = `http://localhost:8080/api/products/${productId}/reviews`;
    return this.http.get(apiUrl)
  }
  addNewReview(productId, newReview) {
    let apiUrl = `http://localhost:8080/api/products/${productId}/reviews`;
    return this.http.post(apiUrl, newReview)
  }

}
