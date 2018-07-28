import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers:[ProductService]
})
export class AppComponent {

  title: string = 'shopIT';
  isCartOpen: boolean = false;
  products: Array<any> = [];
  cart: Array<any> = [];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    //let service = new ProductService();
    this.products = this.productService.loadProducts();
  }
  ngDoCheck() {
    this.cart = this.cartService.getCart();
  }

  toggleCart(e) {
    e.preventDefault();
    this.isCartOpen = !this.isCartOpen;
  }

}
