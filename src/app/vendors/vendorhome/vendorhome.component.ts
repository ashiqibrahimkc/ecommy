import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendorhome',
  templateUrl: './vendorhome.component.html',
  styleUrl: './vendorhome.component.css'
})
export class VendorhomeComponent {
  constructor(private router:Router){}

  oncategory(){
    this.router.navigate(['/addcategory']);
  }
  onorder(){
    this.router.navigate(['/customers']);
  }
  onproduct(){
    this.router.navigate(['/addproduct']);
  }
}
