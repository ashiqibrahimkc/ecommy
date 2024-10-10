import { NgModule } from "@angular/core";
import { VendorhomeComponent } from "./vendorhome.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[
        VendorhomeComponent
    ],
    imports:[
        BrowserModule,
    ]
   
})
export class VendorHomeModule{}
