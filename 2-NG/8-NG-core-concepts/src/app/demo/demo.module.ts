import {EchoPipe} from './echo.pipe';
import {GreetingService} from './greeting.service';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GreetingComponent} from './greeting/greeting.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [GreetingComponent, EchoPipe],
  //providers: [GreetingService],
  exports: [GreetingComponent]
})
export class DemoModule {}
