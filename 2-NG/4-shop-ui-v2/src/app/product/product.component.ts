import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input('value') product;
  tabIdx: number = 1;
  @Output() buy = new EventEmitter()
  reviews: Array<any> = [
    { stars: 5, author: 'who@email.com', body: 'sample-review-1' },
    { stars: 1, author: 'who@email.com', body: 'sample-review-2' }
  ];
  constructor() { }
  ngOnInit() {
  }
  changeTab(index: number, event) {
    console.dir(event);
    this.tabIdx = index;
  }
  isTabSelected(index) {
    return this.tabIdx === index;
  }
  addNewReview(newReview) {
    this.reviews.push(newReview)
  }
  handleBuyBtnClick(e) {
    this.buy.emit(this.product);
  }

}
