import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<any> = [];

  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    // this.productService.loadProducts()
    //   .subscribe((products: any) => {
    //     this.products = products
    //   })

    this.route.data.subscribe(data => {
      this.products = data.products;
    })

  }
  delete(id, event) {
    event.preventDefault();
    this.productService.deleteProduct(id)
      .subscribe(() => {
        this.products = this.products.filter(item => item.id !== id)
      });
  }

}
