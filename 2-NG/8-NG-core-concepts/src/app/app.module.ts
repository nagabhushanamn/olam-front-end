import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { EchoPipe } from './demo/echo.pipe';
import { ProductComponent } from './product/product.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartBadgeComponent,
    StatusComponent,
  ],
  imports: [
    BrowserModule,
    DemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
