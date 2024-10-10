import { Routes } from "@angular/router";
import { VendorComponent } from "./vendor/vendor.component";
import { VendorhomeComponent } from "./vendorhome/vendorhome.component";
import { CategoryComponent } from "./category/category.component";
import { AddproductComponent } from "./addproduct/addproduct.component";
import { CustomersComponent } from "./customers/customers.component";

const routes:Routes=[
{
    path:'',component:VendorComponent,
    children:[
        {path:'vendor',loadChildren:()=>import('./vendorhome/vendorhome.module').then(m=>m.VendorHomeModule)},
        {path:'addproduct',loadChildren:()=>import('./addproduct/addproduct.module').then(m=>m.AddProductModule)},
        {path:'addcategory',loadChildren:()=>import('./category/category.module').then(m=>m.CategoryModule)},
        {path:'customers',loadChildren:()=>import('./customers/customer.module').then(m=>m.CustomerModule)}
    ]
}
]
export class VendorRoutinModule{}