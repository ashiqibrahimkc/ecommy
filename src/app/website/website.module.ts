import { NgModule } from "@angular/core";
import { CartComponent } from "./cart/cart.component";
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main/main.component";
import { ProductComponent } from "./product/product.component";
import { ProductdetailsComponent } from "./productdetails/productdetails.component";
import { ProfileComponent } from "./profile/profile.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[
        CartComponent,
        HomeComponent,
        MainComponent,
        ProductComponent,
        ProductdetailsComponent,
        ProfileComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class WebsiteModule{}