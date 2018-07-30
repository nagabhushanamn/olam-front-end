import {Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartBadgeComponent implements OnInit {

  count: number = 0;

  @Input() cartStream;

  constructor(private cd:ChangeDetectorRef) {}

  ngOnInit() {
    this.cartStream.subscribe(() => {
      this.count++;
      console.log('subscribing...' + this.count);
      this.cd.markForCheck();
    });
  }

}
