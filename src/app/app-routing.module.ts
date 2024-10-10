import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const route:Routes=[
    {path:'',redirectTo:"login",pathMatch:'full'},
    {path:"login",loadChildren:()=>import('./website/login/login.module').then(m=>m.LoginModule)},
    {path:"signup",loadChildren:()=>import('./website/signup/signup.module').then(m=>m.SignupModule)},
    {path:"vendorlogin",loadChildren:()=>import('./vendors/vendorlogin/vendorlogin.module').then(m=>m.VendorLoginModule)},
    {path:"vendorsignup",loadChildren:()=>import('./vendors/vendorsignup/vendorsignup.module').then(m=>m.VendorSignupModule)},
    {path:'',loadChildren:()=>import('./vendors/vendor.module').then(m=>m.VendorModules)},
    {path:'',loadChildren:()=>import('./website/website.module').then(s=>s.WebsiteModule)}
];

@NgModule({
    imports:[
        RouterModule.forRoot(route)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{
}