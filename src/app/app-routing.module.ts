import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./website/login/login.component";
import { SignupComponent } from "./website/signup/signup.component";
import { VendorloginComponent } from "./vendors/vendorlogin/vendorlogin.component";
import { VendorsignupComponent } from "./vendors/vendorsignup/vendorsignup.component";
import { VendorComponent } from "./vendors/vendor/vendor.component";
import { VendorhomeComponent } from "./vendors/vendorhome/vendorhome.component";
import { AddproductComponent } from "./vendors/addproduct/addproduct.component";
import { CategoryComponent } from "./vendors/category/category.component";
import { CustomersComponent } from "./vendors/customers/customers.component";
import { MainComponent } from "./website/main/main.component";
import { HomeComponent } from "./website/home/home.component";
import { ProductComponent } from "./website/product/product.component";
import { CartComponent } from "./website/cart/cart.component";
import { ProductdetailsComponent } from "./website/productdetails/productdetails.component";
import { ProfileComponent } from "./website/profile/profile.component";

const route:Routes=[
    {path:'',redirectTo:"login",pathMatch:'full'},
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"vendorlogin",component:VendorloginComponent},
    {path:"vendorsignup",component:VendorsignupComponent},
    {path:'',component:VendorComponent,children:[
        {path:'vendor',component:VendorhomeComponent},
        {path:'addproduct',component:AddproductComponent},
        {path:'addcategory',component:CategoryComponent},
        {path:'customers',component:CustomersComponent}
    ]},
    {path:'',component:MainComponent,children:[
        {path:'home',component:HomeComponent},
        {path:'product',component:ProductComponent},
        {path:'cart',component:CartComponent},
        {path:'details',component:ProductdetailsComponent},
        {path:'profile',component:ProfileComponent}
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