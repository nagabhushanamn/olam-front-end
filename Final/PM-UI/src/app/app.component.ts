import {ProductService} from './product.service';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';
  products: Array<any> = [];
  
  constructor(private productService: ProductService) {}
  
  ngOnInit() {
    this.productService.loadAllProducts()
      .subscribe((products: any) => {
        this.products = products;
      })
  }
}
