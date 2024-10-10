import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrl: './vendor.component.css'
})
export class VendorComponent {
  constructor(private router:Router){}

oncategory(){
  this.router.navigate(['/addcategory']);
}
onproduct(){
  this.router.navigate(['/addproduct']);
}
onorder(){
  this.router.navigate(['/customers']);
}

}
