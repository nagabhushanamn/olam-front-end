import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
//-----------------------------------------------------------------------------
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all', component: ProductListComponent },
  { path: '**', component: NotFoundComponent }
];
//-----------------------------------------------------------------------------
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
