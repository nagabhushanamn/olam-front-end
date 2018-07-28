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
  errorMessage: string = null;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    let stream = this.productService.loadProducts();
    stream.subscribe((response: any) => {
      this.products = response
    }, (error) => {
      this.errorMessage = "server is not reachable"
    });

  }
  ngDoCheck() {
    this.cart = this.cartService.getCart();
  }

  toggleCart(e) {
    e.preventDefault();
    this.isCartOpen = !this.isCartOpen;
  }

}
