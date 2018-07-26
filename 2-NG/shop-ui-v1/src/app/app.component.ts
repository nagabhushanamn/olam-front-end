import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'shopIT';
  tabIdx: number = 1;
  products: Array<any> = [
    {
      id: 111,
      name: 'Laptop',
      price: 198000,
      description: 'New Mac pro',
      canBuy: true,
      image: 'images/Laptop.png'
    },
    {
      id: 222,
      name: 'Mobile',
      price: 47000,
      description: 'New pro',
      canBuy: true,
      image: 'images/Mobile.png'
    }
  ];

  changeTab(index: number, event) {
    console.dir(event);
    this.tabIdx = index;
  }
  isTabSelected(index) {
    return this.tabIdx === index;
  }

}
