import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductFormComponent } from './product-form/product-form.component';
//-----------------------------------------------------------------------------
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all', component: ProductListComponent },
  { path: 'new', component: ProductFormComponent },
  { path: '**', component: NotFoundComponent }
];
//-----------------------------------------------------------------------------
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    NotFoundComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
