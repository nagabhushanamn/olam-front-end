import {GreetingService} from '../greeting.service';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {

  @Input() message: string = '';

  checkMessage(message) {
    return this.message === message;
  }


}
