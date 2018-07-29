import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

//---------------------------------------------------------------------------
const messages = {
  required: ' is required',
  minlength: ' minlength(3) required',
  min: ' mininum price is 100'
};
function getMessage(field, key) {
  return `${field} ${messages[key]}`;
}
//---------------------------------------------------------------------------

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  errorMessages: any = {}

  product: any = {};
  id: string;

  productForm: FormGroup;
  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(100)]],
      make_date: [''],
      description: ['']
    });

    let nameControl = this.productForm.get('name');
    // nameControl.valueChanges.subscribe(e => {
    // });

    nameControl.statusChanges.subscribe(e => {
      this.validate('name');
    });


    // this.id = this.route.snapshot.params['prodId'];

    // if (this.id) {
    //   this.productService.loadProduct(this.id)
    //     .subscribe(product => {
    //       this.productForm.patchValue(product)
    //     })
    // }


    // this.route.params.subscribe(params => {
    //   this.id = params['prodId'];
    //   if (this.id)
    //     this.productService.loadProduct(this.id)
    //       .subscribe(product => {
    //         this.productForm.patchValue(product)
    //       })
    // })

    this.id = this.route.snapshot.params['prodId'];
    if (this.id)
      this.route.data.subscribe(data => {
        this.productForm.patchValue(data.product)
      });


  }

  validate(fieldName) {
    let control = this.productForm.get(fieldName);
    if (control.invalid && control.touched) {
      let errors = control.errors;
      let keys = Object.keys(errors);
      this.errorMessages[fieldName] = getMessage(fieldName, keys[0]);
    } else {
      this.errorMessages[fieldName] = ""
    }
  }

  handleFormSubmit(e) {
    if (this.productForm.valid) {
      let productData = this.productForm.value;
      if (this.id) {
        this.productService.updateProduct(this.id, productData)
          .subscribe(response => {
            this.router.navigate(['products'])
          });
      } else {
        this.productService.saveProduct(productData)
          .subscribe(response => {
            this.router.navigate(['products'])
          });
      }
    }
  }

}
