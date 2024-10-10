import { NgModule } from "@angular/core";
import { VendorloginComponent } from "./vendorlogin.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[
        VendorloginComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class VendorLoginModule{

}