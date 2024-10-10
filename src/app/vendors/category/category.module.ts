import { NgModule } from "@angular/core";
import { CategoryComponent } from "./category.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[
        CategoryComponent
    ],
    imports:[
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ]
})
export class CategoryModule{}