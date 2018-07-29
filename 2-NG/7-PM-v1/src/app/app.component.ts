import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  
  // landingUrl: string = "/";

  // constructor(private router: Router) {
  //   //redirect on refresh button.
  //   if (window.location.pathname != "/") {
  //     //window.location.href = this.landingUrl;
  //     this.router.navigate([this.landingUrl]);
  //   }
  // }

}
