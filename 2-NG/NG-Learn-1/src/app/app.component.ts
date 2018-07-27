import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  totalCount: number = 100;
  nums: Array<number> = [1, 10, -1, -10];

  incTotalCount(event) {
    //this.totalCount += event.value;
    this.totalCount = this.totalCount + event.value
  } 

}
 