import { NgModule } from "@angular/core";
import { ProfileComponent } from "./profile.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[ProfileComponent],
    imports:[
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ]
})
export class ProfileModule{}