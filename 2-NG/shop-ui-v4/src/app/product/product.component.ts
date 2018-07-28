import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: []
})
export class ProductComponent implements OnInit {

  @Input('value') product;
  tabIdx: number = 1;

  reviews: Array<any> = [];

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit() {
  }

  changeTab(index: number, event) {
    console.dir(event);
    this.tabIdx = index;
    if (this.tabIdx === 3) {
      this.productService.loadReviews(this.product.id)
        .subscribe((reviews: any) => {
          this.reviews = reviews;
        });
    }
  }
  isTabSelected(index) {
    return this.tabIdx === index;
  }
  addNewReview(newReview) {
    this.productService.addNewReview(this.product.id, newReview)
      .subscribe(() => {
        this.reviews.push(newReview)
      })
  }
  handleBuyBtnClick(e) {
    this.cartService.addToCart(this.product);
  }

}
