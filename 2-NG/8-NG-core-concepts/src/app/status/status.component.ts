import {Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {


  message: string = "";

  @Input() cartStream;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.cd.detach();

//    let i = 0;
//    setInterval(() => {
//      i++;
//      this.message = " buy 1 more item  - " + i
//    }, 1000);


    this.cartStream.subscribe(() => {
      this.message = "Item added to cart";
      this.cd.reattach();
      setTimeout(() => {
        this.message="";
        //this.cd.detach();
      }, 3000);
    });
  }

}
