import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  isFormOpen: boolean = false;
  reviewForm: FormGroup;
  @Output() nreview: EventEmitter<any> = new EventEmitter()

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reviewForm = this.fb.group({
      stars: [5, [Validators.required]],
      author: ['nag@email.com', [Validators.required, Validators.email]],
      body: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  toggleForm() {
    this.isFormOpen = !this.isFormOpen;
  }
  handleFormSubmit(e) {
    e.preventDefault();
    console.log('handling review form submit...');
    if (this.reviewForm.valid) {
      let review = this.reviewForm.value;
      this.nreview.emit(review);
      //this.reviewForm.reset();
      this.reviewForm.setValue({ stars: 5, author: 'nag@email.com', body: '' });
      this.toggleForm();
    }
  }

}
