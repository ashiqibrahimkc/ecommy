import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[HomeComponent],
    imports:[
        BrowserModule,
        HttpClientModule
    ]
})
export class HmeModule{}