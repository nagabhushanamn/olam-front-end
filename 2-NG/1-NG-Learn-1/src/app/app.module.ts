import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActionButton } from './action-button.component';
import { TotalCountDisplay } from './total-count-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionButton,
    TotalCountDisplay
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
