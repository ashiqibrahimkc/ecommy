import { NgModule } from "@angular/core";
import { CustomersComponent } from "./customers.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        CustomersComponent
    ],
    imports:[
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class CustomerModule{}