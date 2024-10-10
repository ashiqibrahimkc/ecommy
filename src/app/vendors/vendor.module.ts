import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { VendorRoutinModule } from "./vendor-routing.module";
import { AddproductComponent } from "./addproduct/addproduct.component";
import { CategoryComponent } from "./category/category.component";
import { CustomersComponent } from "./customers/customers.component";
import { VendorComponent } from "./vendor/vendor.component";
import { VendorhomeComponent } from "./vendorhome/vendorhome.component";
import { VendorloginComponent } from "./vendorlogin/vendorlogin.component";
import { VendorsignupComponent } from "./vendorsignup/vendorsignup.component";

@NgModule({
    declarations:[
        AddproductComponent,
        CategoryComponent,
        CustomersComponent,
        VendorComponent,
        VendorhomeComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        VendorRoutinModule
    ]
})
export class VendorModules{}