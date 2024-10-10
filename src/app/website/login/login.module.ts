import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[LoginComponent],
    imports:[
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ]
})
export class LoginModule{}