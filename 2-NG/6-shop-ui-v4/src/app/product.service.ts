import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = "http://localhost:3000/api/products";
  constructor(private http: HttpClient) { }

  loadProducts() {
    let stream = this.http.get(this.apiUrl);
    return stream;
  }
  loadReviews(productId) {
    let apiUrl = `${this.apiUrl}/${productId}/reviews`;
    return this.http.get(apiUrl)
  }
  addNewReview(productId, newReview) {
    let apiUrl = `${this.apiUrl}/${productId}/reviews`;
    return this.http.post(apiUrl, newReview)
  }

}
