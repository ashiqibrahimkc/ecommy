import { NgModule } from "@angular/core";
import { ProductComponent } from "./product.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[ProductComponent],
    imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class ProductModule{}