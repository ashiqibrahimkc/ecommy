import { NgModule } from "@angular/core";
import { SignupComponent } from "./signup.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[SignupComponent],
    imports:[
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ]
})
export class SignupModule{}