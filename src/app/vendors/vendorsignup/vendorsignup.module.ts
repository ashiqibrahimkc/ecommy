import { NgModule } from "@angular/core";
import { VendorsignupComponent } from "./vendorsignup.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[VendorsignupComponent],
    imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class VendorSignupModule{}