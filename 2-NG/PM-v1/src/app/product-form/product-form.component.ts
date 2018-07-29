import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      price: [0, [Validators.required]],
      make_date: [''],
      description: ['']
    });
  }

  handleFormSubmit(e) {
    if (this.productForm.valid) {
      let productData = this.productForm.value;
      this.productService.saveProduct(productData)
        .subscribe(response => {
          this.router.navigate(['all'])
        });
    }
  }

}
