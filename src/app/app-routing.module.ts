import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./website/login/login.component";
import { SignupComponent } from "./website/signup/signup.component";
import { VendorloginComponent } from "./vendors/vendorlogin/vendorlogin.component";
import { VendorsignupComponent } from "./vendors/vendorsignup/vendorsignup.component";
import { VendorComponent } from "./vendors/vendor/vendor.component";
import { VendorhomeComponent } from "./vendors/vendorhome/vendorhome.component";

import { MainComponent } from "./website/main/main.component";
import { HomeComponent } from "./website/home/home.component";
import { ProductComponent } from "./website/product/product.component";
import { CartComponent } from "./website/cart/cart.component";
import { ProductdetailsComponent } from "./website/productdetails/productdetails.component";
import { ProfileComponent } from "./website/profile/profile.component";
import { CategoriesComponent } from "./website/categories/categories.component";
import { ProductsComponent } from "./vendors/products/products.component";
import { ProductStatusComponent } from "./vendors/product-status/product-status.component";
import { OrderManagementComponent } from "./vendors/order-management/order-management.component";

const route:Routes=[
    {path:'',redirectTo:"login",pathMatch:'full'},
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"vendorlogin",component:VendorloginComponent},
    {path:"vendorsignup",component:VendorsignupComponent},
    {path:'',component:VendorComponent,children:[
        {path:'dashbord',component:VendorhomeComponent},
        {path:'products',component:ProductsComponent},
        {path:'product-status',component:ProductStatusComponent},
        {path:'order',component:OrderManagementComponent}
    ]},
    {path:'',component:MainComponent,children:[
        {path:'home',component:HomeComponent},
        {path:'product',component:ProductComponent},
        {path:'categories',component:CategoriesComponent},
        {path:'cart',component:CartComponent},
        {path:'details',component:ProductdetailsComponent}
    ]}
];

@NgModule({
    imports:[
        RouterModule.forRoot(route)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{
}