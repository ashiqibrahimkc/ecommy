import { NgModule } from "@angular/core";
import { AddproductComponent } from "./addproduct.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[
        AddproductComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class AddProductModule{}