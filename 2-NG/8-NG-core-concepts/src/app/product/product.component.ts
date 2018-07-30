import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input() product:any;
  
  @Input() cartStream;
  
  constructor() { }

  ngOnInit() {
  }
  
  buy(){
    console.log('buying..');
    this.cartStream.next({});
  }
  
}
