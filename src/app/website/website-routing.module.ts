import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";

const route:Routes=[
    {path:'',component:MainComponent,children:[
        {path:'home',loadChildren:()=>import('./home/home.module').then(m=>m.HmeModule)},
        {path:'product',loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)},
        {path:'cart',loadChildren:()=>import('./cart/cart.module').then(m=>m.CartModule)},
        {path:'details',loadChildren:()=>import('./productdetails/productdetails.module').then(m=>m.ProductDetailsModule)},
        {path:'profile',loadChildren:()=>import('./profile/profile.module').then(m=>m.ProfileModule)}
    ]}
]
export class WebsiteRoutingModule{}