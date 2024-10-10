import { NgModule } from "@angular/core";
import { CartComponent } from "./cart.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[CartComponent],
    imports:[
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ]
})
export class CartModule{}