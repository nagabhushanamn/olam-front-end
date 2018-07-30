import {GreetingService} from './demo/greeting.service';
import {Component, NgZone} from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  message: string = '';

  progress1: number = 0;
  progress2: number = 0;

  cartStream=new Subject();
  
  product: any = {
    name: 'laptop',
    price: 1000.00
  };

  constructor(private greetingService: GreetingService, private zone: NgZone) {}

  ngOnInit() {
    this.message = this.greetingService.getMessage();
  }


  applyDiscount() {
    
//    this.product.price -= 100; // mutable
//    console.log(this.product);
  
    let product=Object.assign({},this.product,{price:this.product.price-100})// immutable
    console.log(this.product===product);
    this.product=product;
  }


  processOutsideAngularZone() {
    this.progress2 = 0;
    this.zone.runOutsideAngular(() => {

      this.increaseProgress2(() => {
        this.zone.run(() => console.log('uploaded...!'))
      });

    });
  }

  increaseProgress2(doneCallback: () => void) {
    this.progress2 += 1;
    console.log(`Current progress: ${this.progress2}%`);
    if (this.progress2 % 10 === 0) {
      this.zone.run(() => {console.log('10%')})
    }
    if (this.progress2 < 100) {
      setTimeout(() => {
        this.increaseProgress2(doneCallback);
      }, 100);
    } else {
      doneCallback();
    }
  }


  processWithinAngularZone() {

    this.progress1 = 0;
    this.increaseProgress1(() => console.log('uploaded...!'));

  }


  increaseProgress1(doneCallback) {
    this.progress1 += 1;
    console.log(`Current progress: ${this.progress1}%`);
    if (this.progress1 < 100) {
      setTimeout(() => {
        this.increaseProgress1(doneCallback);
      }, 100);
    } else {
      doneCallback();
    }
  } Ï

  changeMessage(message) {
    this.message = message;
    console.log(this.message);
  }


}
