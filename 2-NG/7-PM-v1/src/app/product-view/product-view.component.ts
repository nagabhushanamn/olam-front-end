import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  product: any = {};
  id: string;

  constructor(private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {

    //this.id = this.route.snapshot.params['prodId'];

    this.route.params.subscribe(params => {
      this.id = params['prodId'];
      this.productService.loadProduct(this.id)
        .subscribe(product => {
          this.product = product
        })
    })
  };

}
