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
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductResolverService } from './product-resolver.service';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { TimeGuard } from './time.guard';
import { CurrentStateGuard } from './current-state.guard';
import { RoleVerifyGuard } from './role-verify.guard';
// import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//-----------------------------------------------------------------------------
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    canActivate: [AuthGuard],
    canActivateChild:[RoleVerifyGuard],
    resolve: {
      products: ProductResolverService
    },
    component: ProductListComponent,
    children: [
      {
        path: 'view/:prodId',
        component: ProductViewComponent
      },
      {
        path: 'edit/:prodId',
        component: ProductFormComponent,
        resolve: {
          product: ProductResolverService
        },
        canDeactivate: [CurrentStateGuard]
      },
    ]
  },
  {
    path: 'products/new',
    component: ProductFormComponent,
    canActivate: [TimeGuard, AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];
//-----------------------------------------------------------------------------

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    NotFoundComponent,
    ProductFormComponent,
    ProductViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
    // DateInputsModule,
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


