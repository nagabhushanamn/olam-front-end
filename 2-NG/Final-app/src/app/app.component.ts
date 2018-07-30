import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  products: Array<any> = [];
  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.productService.loadProducts()
      .subscribe((products: any) => {
        this.products = products;
      })
  }

}
