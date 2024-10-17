import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './website/login/login.component';
import { SignupComponent } from './website/signup/signup.component';
import { MainComponent } from './website/main/main.component';
import { HomeComponent } from './website/home/home.component';
import { CartComponent } from './website/cart/cart.component';
import { ProductComponent } from './website/product/product.component';
import { ProductdetailsComponent } from './website/productdetails/productdetails.component';
import { VendorloginComponent } from './vendors/vendorlogin/vendorlogin.component';
import { VendorsignupComponent } from './vendors/vendorsignup/vendorsignup.component';
import { VendorComponent } from './vendors/vendor/vendor.component';

import { VendorhomeComponent } from './vendors/vendorhome/vendorhome.component';

import { ProfileComponent } from './website/profile/profile.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditComponent } from './website/edit/edit.component';
import { AddprofileComponent } from './website/addprofile/addprofile.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CategoriesComponent } from './website/categories/categories.component';
import { ProductsComponent } from './vendors/products/products.component';
import { ProductStatusComponent } from './vendors/product-status/product-status.component';
import { OrderManagementComponent } from './vendors/order-management/order-management.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MainComponent,
    HomeComponent,
    VendorloginComponent,
    VendorsignupComponent,
    CartComponent,
    ProductComponent,
    ProductdetailsComponent,
    VendorComponent,
    VendorhomeComponent,
    ProfileComponent,
    EditComponent,
   AddprofileComponent,
   CategoriesComponent,
   ProductsComponent,
   ProductStatusComponent,
   OrderManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
