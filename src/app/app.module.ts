import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './website/home/home.component';

import { CartComponent } from './website/cart/cart.component';
import { ProductComponent } from './website/product/product.component';
import { ProductdetailsComponent } from './website/productdetails/productdetails.component';
import { VendorloginComponent } from './vendors/vendorlogin/vendorlogin.component';
import { VendorsignupComponent } from './vendors/vendorsignup/vendorsignup.component';
import { VendorComponent } from './vendor/vendor.component';
import { CategoryComponent } from './vendors/category/category.component';
import { VendorhomeComponent } from './vendors/vendorhome/vendorhome.component';
import { CustomersComponent } from './vendors/customers/customers.component';
import { AddproductComponent } from './vendors/addproduct/addproduct.component';
import { ProfileComponent } from './website/profile/profile.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';




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
    CategoryComponent,
    VendorhomeComponent,
    CustomersComponent,
    AddproductComponent,
    ProfileComponent,
   
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
