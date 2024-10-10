import { NgModule } from "@angular/core";
import { ProductdetailsComponent } from "./productdetails.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[ProductdetailsComponent],
    imports:[
        BrowserModule,
        HttpClientModule,
    ]
})
export class ProductDetailsModule{}